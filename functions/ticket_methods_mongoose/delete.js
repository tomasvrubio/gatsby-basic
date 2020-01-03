// delete.js

// Load the server
//import db from './server'
// const db = require('./server')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const id = JSON.parse(event.body),
    response = {
      msg: "Ticket successfully deleted"
    }

    //TODO: BBDD

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