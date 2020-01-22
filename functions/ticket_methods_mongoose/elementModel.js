// ticketModel.js
const mongoose = require('mongoose')

// Set Product Schema
const schema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        name: {
          type: String,
          required: [true, 'Name field is required'],
          max: 100
        },
        element: {
          type: Number
        }
      },{
        timestamps: {
          createdAt: 'created',
          updatedAt: 'updated'
        }
      }),
      Element = mongoose.model('element', schema)

module.exports = Element