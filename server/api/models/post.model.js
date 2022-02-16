const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  picture: { type: String, required: true},
  comment: { type: String},
})


module.exports = mongoose.model('Post', postSchema)
