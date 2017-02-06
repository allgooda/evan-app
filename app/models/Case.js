var mongoose = require('mongoose');

module.exports = mongoose.model('Case', {
  name: String,
  image_url: String,
});