// delete.js

// Load the server
const Ticket = require('./ticketModel')
const db = require('./database')


module.exports = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const id = event.id,
    response = {
      msg: "Ticket successfully deleted"
    }

    //TODO: BBDD
    await Ticket.findByIdAndDelete(id)

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