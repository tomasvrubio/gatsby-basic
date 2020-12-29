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

const { requireAuth } = require('./lib/auth');

exports.handler = requireAuth(async (event, context) => {
  try {
    const { claims } = context.identityContext;

    return {
      statusCode: 200,
      body: JSON.stringify({ claims })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error_description: err.message })
    };
  }
});