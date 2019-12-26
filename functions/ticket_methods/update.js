// update.js
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
          ticket = data.ticket,
          response = {
            msg: "Ticket successfully updated",
            data: ticket
          }
    
    // Use ticketModel and id to update 
    await Ticket.findOneAndUpdate({_id: id}, ticket)
    
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err) {
    console.log('ticket.update', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}