const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  picture: { type: [], required: true},
  comment: { type: String},
})


module.exports = mongoose.model('Post', postSchema)
