// readall.js

// Load the server
//import db from './server'

module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    // const tickets = await Ticket.find(),
    response = {
      msg: "Tickets successfully found",
      // data: tickets
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