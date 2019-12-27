//TODO: Buscar sólo un identificador, el solicitado
// read.js
const mongoose = require('mongoose')

// Load the server
//import db from './server'
const db = require('./server')

// Load the Ticket Model
//import Ticket from './ticketModel'
const Ticket = require('./ticketModel')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    // Parse the ID
    const data = JSON.parse(JSON.parse(event.body)),
          id = data.id,
          ticket = await Ticket.find({_id: id}), // Use ticketModel and id to find
          response = {
            msg: "Ticket successfully found",
            data: ticket
          }
    
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
    
  } catch (err) {
    console.log('ticket.read', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}