// readall.js

// Load the server
const Ticket = require('./ticketModel')
const database = require('./database')

module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { 
    const db = await database.db,
    tickets = await db.collection('ticket').find({}).toArray(),
    response = {
      msg: "Tickets successfully found",
      data: tickets
    }

    console.log(tickets)

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