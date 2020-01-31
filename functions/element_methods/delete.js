// delete.js

// Load the server
const Element = require('./elementModel')
const db = require('./database')


module.exports = async (event, context) => {

  context.callbackWaitsForEmptyEventLoop = false
  
  try {
    const id = event.id

    element= await Element.findByIdAndDelete(id)

    const  response = {
      msg: "Element successfully deleted",
      data: element
    }

    return {
      statusCode: 204,
      body: JSON.stringify(response)
    }
  } catch(err) {
    console.log('element.delete', err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
}