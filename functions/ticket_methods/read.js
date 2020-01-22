//TODO: Buscar sólo un identificador, el solicitado
// read.js


// Load the server
const database = require('./database')

// database.db.then((db) => {
//   db.collection('ticket').find({}).toArray().then((resp) => {
//     console.log(resp)
//   })
// })

// console.log(database)

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