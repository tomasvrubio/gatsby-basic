// create.js

// Load the server
const mongoose = require('mongoose')
const Element = require('./elementModel')
const db = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { 
    console.log(event.body)

    const data = JSON.parse(event.body),
    element= new Element ({
        _id: data.id || mongoose.Types.ObjectId(),
        name : data.name,
        description: data.description
    }),
    response = {
      msg: "Element successfully created",
      data: element
    }

    console.log(data)

    await element.save()

    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch (err) {
    console.log('element.create', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}