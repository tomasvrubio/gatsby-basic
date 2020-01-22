// readall.js

// Load the server
//import db from './server'
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
    // const tickets = await Ticket.find(),
    database.db.then((db) => {
      db.collection('ticket').find({}).toArray().then((tickets) => {
        console.log(tickets)
        const response = {
          msg: "Tickets successfully found",
          data: tickets
        }

        return {
          statusCode: 200,
          body: JSON.stringify(response)
        }
      })
    })
    
    // const response = {
    //   msg: "Tickets successfully found",
    //   // data: tickets
    // }


    
  } catch (err) {
    console.log('ticket.readAll', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}