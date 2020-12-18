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


const winston = require('winston');

const papertrail = new winston.transports.Http({
  host: 'logs.collector.solarwinds.com',
  path: '/v1/log',
  auth: { username: new String(''), password: process.env.GATSBY_LOG_TOKEN },
  ssl: true,
  level: "info"
});

const logger = winston.createLogger({
  transports: [papertrail],
});

//Este mensaje veo que se pinta las mismas veces cuando la ejecuto en local pero en netlify me da la sensacion de que solo lo hace la primera vez...
logger.error(process.env._HANDLER + " - Se levanta la funcion.")

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'

  logger.error(process.env._HANDLER+' - Se ejecuta la funcion.');
  logger.info(process.env);

  // Mientras voy revisando las variables de entorno me viene bien ver los dos objetos.
  //console.log(envConfig.parsed)
  //console.log(process.env) // Aquí puedo ver que variables de utilidad llegan a la función al correr en Producción.

    // logger.log(event)
    // logger.log(process.env)

  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}