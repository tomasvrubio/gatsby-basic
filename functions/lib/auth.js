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

const { NetlifyJwtVerifier, removeNamespaces, claimToArray } = require('@serverless-jwt/netlify');

const verifyJwt = NetlifyJwtVerifier({
  issuer: process.env.JWT_ISSUER,
  audience: process.env.JWT_AUDIENCE,
  mapClaims: (claims) => {
    const user = claims;
    user.scope = claimToArray(user.scope);
    return user;
  }
});

/**
 * Require the request to be authenticated.
 */
module.exports.requireAuth = verifyJwt;