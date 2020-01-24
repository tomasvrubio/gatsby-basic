// readall.js

// Load the database and model
const Ticket = require('./ticketModel')
const db = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { 
    const tickets = await Ticket.find({}),
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