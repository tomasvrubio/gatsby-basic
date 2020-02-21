import React from 'react';
import { Box, Heading, Button } from 'grommet';
import { Sidebar, ProductHunt, Ticket } from "grommet-icons"

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const ownAppBar = () => (
  <AppBar elevation="small" pad="small">
    <Box direction='row' align="center">
      <Button
        focusIndicator="false"
        icon={<ProductHunt />}
        onClick={() => {}}
      />
      <Heading level='3' margin='none'>miNegocio</Heading>
    </Box>
    <Button
      icon={<Ticket />}
      label="Reserva"
      color="Yellow"
      primary="true"
      onClick={() => {}}
    />
    <Button
      icon={<Sidebar />}
      // onClick={() => setShowSidebar(!showSidebar)
      onClick={() => {}}
    />
  </AppBar>
);

export default ownAppBar;