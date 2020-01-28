// update.js

// Load the server
const Ticket = require('./ticketModel')
const db = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    // Parse the ID
    const id = event.id,
    data = JSON.parse(event.body)

    ticket = await Ticket.findByIdAndUpdate(id, data, {new: true})

    const response = {
      msg: "Ticket successfully updated",
      data: ticket
    }
    
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