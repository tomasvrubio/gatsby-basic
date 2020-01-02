// update.js

// Load the server
//import db from './server'
// const {db} = require('./server')


module.exports = async (event, context) => {
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
    
    //TODO: Completar código

    
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