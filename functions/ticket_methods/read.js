// read.js

// // Load the database and model
const Ticket = require('./ticketModel')
const db = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const id = event.id,   
    ticket = await Ticket.findById({"_id": id}),
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