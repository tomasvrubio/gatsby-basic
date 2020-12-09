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

// const ownAppBar = () => {
//   // this.state = {
//   //   showSidebar: useState(false)
//   //   // setShowSidebar: useState(false)
//   // }
//   // // const [showSidebar] = useState(false)
//   // // const [showSidebar, setShowSidebar] = useState(false)

//   const showSidebar = this.props.showSidebar

//   return (
//     <AppBar elevation="small" pad="small">
//       <Box direction='row' align="center">
//         <Button
//           focusIndicator="false"
//           icon={<ProductHunt />}
//           onClick={() => {}}
//           href="/"
//         />
//         <Heading level='3' margin='none'>miNegocio</Heading>
//       </Box>
//       <Button
//         icon={<Ticket />}
//         label="Reserva"
//         color="Yellow"
//         primary="true"
//         onClick={() => {}}
//       />
//       <Button
//         icon={<Sidebar />}
//         // onClick={() => this.setState.showSidebar(!this.state.showSidebar)}
//         // onClick={() => setShowSidebar(!showSidebar)}
//         onClick={() => {}}
//       />
//     </AppBar>
//   )
// };

class ownAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    console.log (data);
    this.props.onShowSidebarChange(data);
  }

  sendData = (data) => {
         this.props.parentCallback("hola");
  }

  render() {
    const showSidebar = this.props.showSidebar;
    return (
      <AppBar elevation="small" pad="small">
        <Box direction='row' align="center">
          <Button
            focusIndicator="false"
            icon={<ProductHunt />}
            onClick={() => {}}
            href="/"
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
          // onClick={() => this.setState.showSidebar(!this.state.showSidebar)}
          // onClick={() => setShowSidebar(!showSidebar)}
          onClick={() => this.handleChange(!showSidebar)}
          // onClick={this.handleChange(!showSidebar)}
        />
      </AppBar>
    );
  }
}

export default ownAppBar;