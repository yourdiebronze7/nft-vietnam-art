const express = require('express');
const mongoose = require('mongoose');
const nftRoutes = require('./routes/nftRoutes');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api/nfts', nftRoutes);

// Database connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/nft-vietnam-art';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});