const express = require('express');
const router = express.Router();
const Review = require('./models/review');

router.post('/', async (req, res, next) => {
  const { username, stars, review, item } = req.body;
  const newReview = new Review({ username, stars, review, item });

  try { await newReview.save(); }
  catch { err => { return res.status(500).json(err) } }

  res.status(201).json({ review: newReview })
})

router.get('/:item', async (req, res, next) => {
  const item = req.params.item;
  let reviews;

  try { reviews = await Review.find({ item: item }) }
  catch { err => { return res.status(500).json({ message: err }) } }

  res.json(reviews);
})

module.exports = router;