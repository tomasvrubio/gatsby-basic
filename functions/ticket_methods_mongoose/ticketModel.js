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
        datePicked: {
          type: Date,
          required: [true, 'Date field is required']
        },
        email: {
          type: String,
          required: [true, 'Date field is required']
        },
        phone: {
          type: String
        },
        element: {
          type: Number
        },
        state: {
          type: String
        },
        notes: {
          type: String
        }
      },{
        timestamps: {
          createdAt: 'created',
          updatedAt: 'updated'
        }
      }),
      Ticket = mongoose.model('ticket', schema)

module.exports = Ticket