const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/nft-vietnam-art';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Chào mừng đến với NFT Vietnam Art!');
});

app.listen(port, () => {
  console.log(`Máy chủ chạy trên cổng ${port}`);
});