// Estas líneas tienen que ir en la parte superior de todas los ficheros de función para poder cargar variables de entorno de desarrollo
// --------------------------------------------------------
const envConfig = require("dotenv").config({
  path: `.env.development`,
});
Object.entries(envConfig.parsed || {}).forEach(
  ([key, value]) => (process.env[key] = value)
);
// ---------------------------------------------------------

exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  //const { GATSBY_AUTH0_DOMAIN, GATSBY_AUTH0_CLIENTID, GATSBY_AUTH0_CALLBACK, GATSBY_PRUEBA} = process.env  

  console.log(process.env.GATSBY_AUTH0_DOMAIN)
  console.log(process.env.GATSBY_AUTH0_CLIENTID)
  console.log(process.env.GATSBY_AUTH0_CALLBACK)
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}