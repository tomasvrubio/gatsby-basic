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


console.log("Evaluating database.js")

module.exports = {  
  db: connectToDatabase(process.env.GATSBY_MONGODB_URI)
}



