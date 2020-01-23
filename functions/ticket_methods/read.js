// read.js

// Load the server
const database = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const id = event.id
    db = await database.db,
    ticket = await db.collection('ticket').findOne({id}) // Use ticketModel and id to find
    response = {
      msg: "Ticket successfully found",
      data: ticket
    }

    database.db.collection('ticket').findOne({id}).then(a => {
      console.log(a)
    })

    console.log(ticket)
    
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