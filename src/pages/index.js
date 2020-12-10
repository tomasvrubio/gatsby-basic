import React from 'react';
import { Box, Button, Link, Text } from 'grommet';
import { Contact, Ticket } from "grommet-icons"

import Layout from '../components/layout';

const IndexPage = () => {

  return(
    <Layout>
      <Box margin='medium' align='center'>
        {/* <div>
          <p>Hello Gatsby!</p>
          <p>{process.env.GATSBY_FUNC_PATH}</p>
          <Link to="/account">Go to your account</Link>
          <Link to="/history">Go to history</Link>
          <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
        </div> */}
        <p>Hello Gatsby! {process.env.GATSBY_FUNC_PATH}</p>
        <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
        
        <Box direction='row' fill="horizontal" justify="center" wrap="true">
          <Box align='center' background="dark-3" border="all" margin="small" pad="xlarge" width="medium">Tarjeta 1</Box>
          <Box align='center' background="dark-3" border="all" margin="small"  pad="xlarge" width="medium">Tarjeta 2</Box>
          <Box align='center' background="dark-3" border="all" margin="small"  pad="xlarge" width="medium">Tarjeta 3</Box>
        </Box>
        
        <Box direction="row" gap="medium" pad="large">
          <Button
            icon={<Contact />}
            label="Contacta con nosotros"
            color="Grey"
            onClick={() => {}}
          />
          <Button
            icon={<Ticket />}
            label="Reserva"
            color="Yellow"
            primary="true"
            onClick={() => {}}
          />
        </Box>
        <Box align="center" background="dark-3" border="all" fill="horizontal" pad="large">
          Instagram Feed  
        </Box>
      </Box>
    </Layout>
  )
};

export default IndexPage;