// Estas líneas tienen que ir en la parte superior de todas los ficheros de función para poder cargar variables de entorno de desarrollo
// --------------------------------------------------------
const envConfig = require("dotenv").config({
  path: `.env.development`,
});
//Para cargar una variable en concreto: process.env.NOMBRE_V = envConfig.parsed.NOMBRE_V
//Para cargar todas las variables en el fichero de entorno:
Object.entries(envConfig.parsed || {}).forEach(
  ([key, value]) => (process.env[key] = value)
);
// ---------------------------------------------------------

const { MongoClient } = require('mongodb')

let cachedDb = null;

function connectToDatabase (uri) {
  console.log('=> connect to database');

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(uri, { useUnifiedTopology: true })
    .then(client => {
      var db = client.db('p_reservation'); //TODO: Aquí ponemos el nombre de la BD dentro del cluster
      cachedDb = db;
      return cachedDb;
    }).catch(err => {
      console.log(err)
    })
  ;
}

function queryDatabase (db) {
  console.log('=> query database');

  return db.collection('ticket').find({}).toArray() //TODO: Aquí ponemos el nombre de la colección en la que queremos buscar
    .then((response) => { 
      console.log(response)
      return { statusCode: 200, body: 'success' }; 
    }).catch(err => {
      console.log('=> an error occurred: ', err);
      return { statusCode: 500, body: 'error' };
    });
}

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  console.log('event: ', event);

  connectToDatabase(process.env.GATSBY_MONGODB_URI)
    .then(db => queryDatabase(db))
    .then(result => {
      console.log('=> returning result: ', result);
      callback(null, result);
    })
    .catch(err => {
      console.log('=> an error occurred: ', err);
      callback(err);
    });
};