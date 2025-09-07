const express = require('express');
const NFT = require('../models/NFT');
const router = express.Router();

// Tạo NFT mới
router.post('/', async (req, res) => {
  const newNFT = new NFT(req.body);
  try {
    const savedNFT = await newNFT.save();
    res.status(201).json(savedNFT);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Lấy danh sách NFT
router.get('/', async (req, res) => {
  try {
    const nfts = await NFT.find();
    res.status(200).json(nfts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;