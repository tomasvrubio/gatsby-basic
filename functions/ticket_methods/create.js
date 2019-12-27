// create.js
const mongoose = require('mongoose')

// Load the server
//import db from './server'
const db = require('./server')

// Load the Ticket Model
//import Ticket from './ticketModel'
const Ticket = require('./ticketModel')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { //TODO: Revisar estos parámetros de entrada para ajustarlos al modelo de BBDD de tickets
    const data = JSON.parse(event.body),
          name = data.name,
          price = parseInt(data.price),
          id = mongoose.Types.ObjectId(),
          ticket = {
            _id: id,
            name: name,
            price: price,
            __v: 0
          },
          response = {
            msg: "Ticket successfully created",
            data: ticket
          }
    
    // Use ticketModel to create a new ticket
    await Ticket.create(ticket)

    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log('ticket.create', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}