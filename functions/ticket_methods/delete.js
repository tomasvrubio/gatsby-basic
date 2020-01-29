// delete.js

// Load the server
const Ticket = require('./ticketModel')
const db = require('./database')


module.exports = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const id = event.id

    ticket = await Ticket.findByIdAndDelete(id)

    const  response = {
      msg: "Ticket successfully deleted",
      data: ticket
    }

    return {
      statusCode: 204,
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