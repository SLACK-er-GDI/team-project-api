'use strict'

const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tags: {
    type: String
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
  // toJSON: {
  //   virtuals: true,
  //   transform: function (doc, ret, options) {
  //     const userId = (options.user && options.user._id) || false
  //     ret.editable = userId && userId.equals(doc._owner)
  //     return ret
    // }
})

// fileSchema.virtual('length').get(function length () {
//   return this.text.length
// })

const File = mongoose.model('File', fileSchema)

module.exports = File
