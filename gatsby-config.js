/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// TODO: Esto lo puse durante las pruebas que hice para hacer funcionar las variables de entorno pero creo que no es necesario. Lo dejo comentado por si tuviese problemas utilizándolas en otra parte del código poder ver si activándolo funciona. Si no, BORRAR.
// require("dotenv").config({
//   path: `.env`,
// })

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Pruebas Gatsby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `functions`,
          path: `${__dirname}/functions/`,
      },
    },      
  ],
}
