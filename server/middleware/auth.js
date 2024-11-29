const jwt = require('jsonwebtoken');
const JWT_SECRET='AKHILESHBHADULA'

module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach decoded token to request object
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
