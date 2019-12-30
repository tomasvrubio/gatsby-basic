
/* Import faunaDB sdk */
const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

const mongoose = require("mongoose")



module.exports = async (event, context) => {
  const id = event.id
  console.log("Hola")
  console.log(`Function 'read' invoked. Read id: ${id}`)
  return client
    .query(q.Get(q.Ref(`classes/todos/${id}`)))
    .then(response => {
      console.log('success', response)
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    })
    .catch(error => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}