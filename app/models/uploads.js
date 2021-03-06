'use strict'

const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tags: {
    type: Array
  },
  description: {
    type: String
  },
  ownerEmail: {
    type: String
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
  }
})

const Upload = mongoose.model('Upload', uploadSchema)

module.exports = Upload
