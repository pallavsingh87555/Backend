const express = require('express');
const router = express.Router();
const Order = require('.//models/order');

router.post('/', async (req, res, next) => {
  const { userId, date, grand, meal_disc, time } = req.body;
  const order = new Order({ userId, date, grand, meal_disc, time });

  try { await order.save(); }
  catch { err => { return res.status(500).json(err) } }

  res.status(201).json({ order: order });
})

module.exports = router;