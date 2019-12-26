// readall.js
const {mongoose} = require('mongoose')

// Load the server
//import db from './server'
const {db} = require('./server')

// Load the Product Model
//import Ticket from './ticketModel'
const Ticket = require('./ticketModel')

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    // Use ticketModel to find all products
    const tickets = await Ticket.find(),
          response = {
            msg: "Tickets successfully found",
            data: tickets
          }
    
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
    
  } catch (err) {
    console.log('ticket.readAll', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}