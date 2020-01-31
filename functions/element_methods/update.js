// update.js

// Load the server
const Element = require('./elementModel')
const db = require('./database')


module.exports = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    // Parse the ID
    const id = event.id,
    data = JSON.parse(event.body)

    element= await Element.findByIdAndUpdate(id, data, {new: true})

    const response = {
      msg: "Element successfully updated",
      data: element
    }
    
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err) {
    console.log('element.update', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}