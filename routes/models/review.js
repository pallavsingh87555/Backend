const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  username: String,
  stars: Number,
  review: String,
  item: String
});

module.exports = mongoose.model('Review', reviewSchema);