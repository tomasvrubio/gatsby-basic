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

var logger = require('logzio-nodejs').createLogger({
    token: 'VyuuWqTQbOiFLYCimjXqOgfdmHVXDXmL',
    host: 'listener.logz.io',
    type: 'YourLogType'     // OPTIONAL (If none is set, it will be 'nodejs')
});

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'

  // Mientras voy revisando las variables de entorno me viene bien ver los dos objetos.
  console.log(envConfig.parsed)
  console.log(process.env) // Aquí puedo ver que variables de utilidad llegan a la función al correr en Producción.

  var obj = { 
        message: 'Some log message', 
        param1: 'val1',
        param2: 'val2'
    };
    logger.log(obj);
    logger.sendAndClose()

  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}