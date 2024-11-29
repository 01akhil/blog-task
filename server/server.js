const express=require('express');
const cookieParser=require('cookie-parser')
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config()

const postRoutes = require('./routes/posts');

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});


mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connected to MongoDB')
    })
    .catch((error)=>{
        console.log((error))
    })


const app=express();
const PORT=process.env.PORT ||5000

app.use(
    cors({
        // origin:process.env.CLIENT_BASE_URL,
        origin:"*",
        methods: ['GET', 'POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);


app.use(cookieParser());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


app.use('/api/posts', postRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})