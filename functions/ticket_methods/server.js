// server.js
const mongoose = require('mongoose')

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


// Initialize connection to database
const dbUrl = process.env.GATSBY_MONGODB_URI,
      dbOptions = {
        useNewUrlParser: true,
        useFindAndModify: false
      }

// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

export default db