import React from 'react';
import { Link } from 'gatsby';
import { Box, Button } from 'grommet';
import { Contact, Ticket } from "grommet-icons"

import Layout from '../components/layout';

const IndexPage = () => {

  return(
    <Layout>
      <Box align='center'>

        <p>Hello Gatsby! {process.env.GATSBY_FUNC_PATH}</p>
        <Link to={"/functions"}>Trigger functions here</Link>
        
        <Box direction='row' fill="horizontal" justify="center" wrap>
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
            href="/formulario"
          />
          <Button
            icon={<Ticket />}
            label="Reserva"
            color="Yellow"
            primary
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