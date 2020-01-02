// create.js

// Load the server
//import db from './server'
// const db = require('./server')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { 
    const data = JSON.parse(event.body),
    // name = data.name,
    // price = parseInt(data.price),
    // id = mongoose.Types.ObjectId(),
    // ticket = {
    //   _id: id,
    //   name: name,
    //   price: price,
    //   __v: 0
    // },
    response = {
      msg: "Ticket successfully created",
      data: ticket
    }

    //TODO: Codigo BBDD

    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log('ticket.create', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}