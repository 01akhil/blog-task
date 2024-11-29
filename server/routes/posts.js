const express=require('express')
const Post=require('../models/Post')
const multer=require('multer')
const cloudinary=require('cloudinary')
const {imageUploadUtil}=require("../helpers/cloudinary");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const { body, validationResult } = require('express-validator');
const User=require('../models/User')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const sanitizeHtml = require('sanitize-html');

const router=express.Router();
const JWT_SECRET='AKHILESHBHADULA'

router.post(
    
    '/signup',
    [
      body('email').isEmail().withMessage('Enter a valid email'),
      body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],

    
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  
      const { email, password } = req.body;

      console.log("email is",email);
      console.log("password is",password);
  
      try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const user = await User.create({ email, password: hashedPassword });
        res.status(201).json({ message: 'User created successfully', userId: user._id });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  );
  
  // User Login
  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  
      const isMatch = await bcrypt.compare(password, user.password); // Compare passwords
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

router.get('/',async function(req,res){
    try{
        const posts=await Post.find();
        res.status(200).json(posts);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});


//POST
router.post('/', upload.single('image'), async (req, res) => {
    try {
      const { title, content, category } = req.body;
      const sanitizedContent = sanitizeHtml(content);
      let imageUrl = '';
  
      if (req.file) {
        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const url = "data:" + req.file.mimetype + ";base64," + b64;
        uploadedImage = await imageUploadUtil(url); 
        
        imageUrl = uploadedImage.secure_url;
    }
  
      const newPost = new Post({
        title,
        content: sanitizedContent,
        category,
        image: imageUrl, 
      });
  
      await newPost.save();
      res.status(201).json(newPost);  
  
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ message: 'Error creating post', error: error.message });
    }
  });


// GET /api/posts/:id - Get single post by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post', error });
    }
});

module.exports = router;



router.get('/search', async (req, res) => {
  console.log("Reached here")
  const { query } = req.query; // Extract search query

  console.log('Query param received:', req.query.query);


  try {
    if (!query) {
      return res.status(400).json({ error: 'No search query provided' });
    }

    const results = await Post.find({
      $or: [
        { title: { $regex: query, $options: 'i' } }, // Case-insensitive search in title
        { content: { $regex: query, $options: 'i' } }, // Case-insensitive search in content
        { category: { $regex: query, $options: 'i' } }, // Case-insensitive search in category
      ],
    });

    if (results.length === 0) {
      return res.status(404).json({ message: 'No posts found' });
    }

    res.json(results);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: 'Failed to search posts' });
  }
});
