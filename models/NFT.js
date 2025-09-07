const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  tokenId: { type: String, required: true, unique: true },
  owner: { type: String, required: true }
});

module.exports = mongoose.model('NFT', nftSchema);