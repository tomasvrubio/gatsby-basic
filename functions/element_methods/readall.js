// readall.js

// Load the database and model
const Element = require('./elementModel')
const db = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try { 
    const elements = await Element.find({}),
    response = {
      msg: "Tickets successfully found",
      data: elements
    }

    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }

  } catch (err) {
    console.log('element.readAll', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}