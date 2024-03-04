const express = require('express');
const router = express.Router();
const Order = require('.//models/order');

router.get('/:uid', async (req, res, next) => {
  const userId = req.params.uid;
  let history;

  try { history = await Order.find({ userId: userId }) }
  catch { err => { return res.status(500).json({ message: err }) } }

  res.json(history);
});

module.exports = router;