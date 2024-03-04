const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: String,
  date: String,
  grand: Number,
  meal_disc: [
    {
      noOfItems: Number,
      price: Number,
      title: String
    }
  ],
  time: String
});

module.exports = mongoose.model('Order', orderSchema);