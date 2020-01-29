// create.js

// Load the server
const mongoose = require('mongoose')
const Ticket = require('./ticketModel')
const db = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { 
    console.log(event.body)

    const data = JSON.parse(event.body),
    ticket = new Ticket ({
        _id: data.id || mongoose.Types.ObjectId(),
        name : data.name,
        email : data.email,
        phone : data.phone,
        datePicked : data.datePicked,
        element : data.element,
        state : "pending"
    }),
    response = {
      msg: "Ticket successfully created",
      data: ticket
    }

    console.log(data)

    await ticket.save()

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