const mongoose = require('mongoose')


const post = mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Posts', post)
