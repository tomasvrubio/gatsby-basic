import React from 'react';
import { graphql } from "gatsby"
import { Box } from 'grommet';

import Layout from '../components/layout';

const History = ({data}) => (
  <Layout>
    <Box margin='medium' align='center'>
      {/* <h1>About {data.site.siteMetadata.title}</h1> */}

        <h1>My Site's Functions Directory</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>relativeDirectory</th>
              <th>extension</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td><a href={process.env.GATSBY_FUNC_PATH + "/" + node.name}>{node.name}</a></td>
                <td>{node.relativeDirectory}</td>
                <td>{node.extension}</td>
                {/* <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a> */}
              </tr>
            ))}
          </tbody>
        </table>

    </Box>
  </Layout>
);

/* export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
` */


    // allFile {
    /* allFile (filter: {relativeDirectory: {eq: ""}}){ */
export const funciones = graphql`
  query {
    allFile (filter: {relativeDirectory: {eq: ""}}){
      edges {
        node {
          name
          relativeDirectory
          extension
        }
      }
    }
  }
`

export default History;

