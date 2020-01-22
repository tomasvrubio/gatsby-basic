//TODO: Buscar sólo un identificador, el solicitado
// read.js
const mongoose = require('mongoose')
const Ticket = require('./ticketModel')
const Element = require('./elementModel')
//console.log(Ticket)

// Load the server
const db = require('./database_mongoose')

db.then((prueba) => {
    console.log(prueba)
})


Ticket.find({}, function(err, ticket) {
    console.log(JSON.stringify(ticket))
})

Element.find({}, function(err, element) {
    console.log(JSON.stringify(element))
})

module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const id = event.id,
    // ticket = await Ticket.find({_id: id}), // Use ticketModel and id to find
    response = {
      msg: "Ticket successfully found",
      // data: ticket
    }

    //TODO: BBDD
    
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