const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  leadingRole: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Movie', MovieSchema);