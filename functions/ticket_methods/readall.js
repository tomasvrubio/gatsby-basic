// readall.js

// Load the server
const Ticket = require('./ticketModel')
const Element = require('./elementModel')
const db = require('./database')

console.log(Ticket)
console.log(db)

Ticket.find({}, function(err, ticket) {
  console.log(JSON.stringify(ticket))
})

Element.find({}, function(err, element) {
  console.log(JSON.stringify(element))
})


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { 
    //const db = await database.db,
    // tickets = await db.collection('ticket').find({}).toArray(),
    const tickets = await Ticket.find({}),
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