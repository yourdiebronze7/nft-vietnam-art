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
  .then(() => console.log('Kết nối tới MongoDB thành công!'))
  .catch(err => console.error('Kết nối tới MongoDB thất bại:', err));

app.listen(port, () => {
  console.log(`Máy chủ chạy trên cổng ${port}`);
});