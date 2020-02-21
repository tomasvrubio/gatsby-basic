import React from 'react';
import { Grommet } from 'grommet';

import OwnAppBar from './header';
import OwnFooter from './footer';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const Layout = props => (
  <Grommet theme={theme}>
    {/* TODO: Cambiar el header de las páginas */}
    {/* <Head>
      <title>Horizontal Working</title>
    </Head> */}
    <OwnAppBar />
    {/* TODO: Hacer que sea variable el botón que he puesto en la cabecera para que no aparezca en todas las páginas (en la de reserva por ejemplo) */}
    {props.children}
    <OwnFooter />
  </Grommet>
);

export default Layout;