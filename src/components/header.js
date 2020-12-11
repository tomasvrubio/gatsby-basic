import React from 'react';
import { Box, Button } from 'grommet';
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


class ownAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    console.log (data);
    this.props.onShowSidebarChange(data);
  }

  render() {
    const showSidebar = this.props.showSidebar;
    return (
      <AppBar elevation="small" pad="small">
        <Button
          icon={<ProductHunt />}
          onClick={() => {}}
          href="/"
          label="miNegocio"
          plain
          margin="xsmall"
        />
        <Button
          icon={<Ticket />}
          label="Reserva"
          color="Yellow"
          primary
          onClick={() => {}}
        />
        <Button
          icon={<Sidebar />}
          onClick={() => this.handleChange(!showSidebar)}
        />
      </AppBar>
    );
  }
}

export default ownAppBar;