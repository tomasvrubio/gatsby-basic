// delete.js
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
    // Parse the ID
    const id = JSON.parse(event.body),
          response = {
            msg: "Ticket successfully deleted"
          }
    
    // Use ticketModel to delete 
    await Ticket.findOneAndDelete({ _id: id })
    
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err) {
    console.log('ticket.delete', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}