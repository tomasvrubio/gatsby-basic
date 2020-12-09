import React, { useState } from "react";
import { Link } from 'gatsby';
import { Box, Button, Collapsible, Grommet, Layer, ResponsiveContext, Text } from 'grommet';
import { FormClose, ProductHunt } from "grommet-icons"

import OwnAppBar from './header';
import OwnFooter from './footer';
// import OwnBodySidebar from './bodysidebar';

const theme = {
  global: {
    colors: {
      brand: '#028BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const SideBarLink = ({ to, text, icon: Icon }) => (
  <Button as="span" hoverIndicator>
    <Link to={to}>
      <Box gap="small" pad="small" direction="row" >
        <Icon />
        <Text>{text}</Text>
      </Box>
    </Link>
  </Button>
)

class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showSidebar: true
        }
        //Este bind lo hago para poder llamar desde el callback de la cabecera. Tutorial: https://www.debuggr.io/react-setstate-is-not-a-function/
        this.handleShowSidebarChange = this.handleShowSidebarChange.bind(this);
    }

    handleShowSidebarChange(showSidebar) {
      this.setState({showSidebar});
    }

    render(){
        return(
            <Grommet theme={theme}>
              <ResponsiveContext.Consumer>
                {size => (
                  <Box fill >
                    {/* TODO: Cambiar el header de las páginas */}
                    {/* <Head>
                      <title>Horizontal Working</title>
                    </Head> */}


                    <OwnAppBar showSidebar={this.state.showSidebar} onShowSidebarChange={this.handleShowSidebarChange}/>
                    {/* TODO: Hacer que sea variable el botón que he puesto en la cabecera para que no aparezca en todas las páginas (en la de reserva por ejemplo) */}
                    {/* <OwnBodySidebar  showSidebar={this.state.showSidebar} size={size} >
                      {this.props.children}
                    </OwnBodySidebar> */}

                    <Box direction='row' flex overflow={{ horizontal: 'hidden' }} pad="xsmall">
                      <Box flex align='center' background='dark-1'>
                        {this.props.children}
                      </Box>
                      {(!this.state.showSidebar || size !== 'small') ? (
                        <Collapsible direction="horizontal" open={this.state.showSidebar}>
                          <Box
                            flex
                            width='medium'
                            background='light-4'
                            elevation='small'
                            align='center'
                            justify='center'
                          >  
                            <Box margin={{ vertical: `small` }}>
                              <SideBarLink to="/account" text="Admin" icon={ProductHunt} />
                              <SideBarLink to="/history" text="History" icon={ProductHunt} />
                            </Box>
                          </Box>
                        </Collapsible>
                      ): (
                        <Layer>
                          <Box
                            background='light-2'
                            tag='header'
                            justify='end'
                            align='center'
                            direction='row'
                          >
                            {/* <Button
                              icon={<FormClose />}
                              onClick={() => setShowSidebar(false)}
                            /> */}
                            <Button
                              icon={<FormClose />}
                              onClick={() => this.handleShowSidebarChange(false)}
                            />
                          </Box>
                          <Box
                            fill
                            background='light-2'
                            align='center'
                            justify='center'
                          >
                          </Box>
                        </Layer>
                      )}
                    </Box>


                    <OwnFooter />
                  </Box>
                )}
              </ResponsiveContext.Consumer>
            </Grommet>
        );
    }
}
export default Layout;



// this.state = {
//   showSidebar: true
// }


//PASAR ESTE CODIGO A ALGO ASÍ:
// import React, {Component} from 'react';
// import Child1 from './Child1';
// import Child2 from './Child2';
// class Parent extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             value_key:""
//         }
//     }
//     parentFunction=(data_from_child)=>{
//         this.setState({value_key:data_from_child});
//     }
//     render(){
//         return(
//             <div>      
//                 <Child1 functionCallFromParent={this.parentFunction.bind(this)}/>
//                 <Child2 valueFromParent={this.state.value_key}/>
//             </div>
//         );
//     }
// }
// export default Parent;

// const Layout = props => {
  
//   // this.state = {
//   //   showSidebar: true
//   // }
  

//   const a = "hola"

//   return (
//     <Grommet theme={theme}>
//       {/* TODO: Cambiar el header de las páginas */}
//       {/* <Head>
//         <title>Horizontal Working</title>
//       </Head> */}
//       <OwnAppBar />
//       {/* TODO: Hacer que sea variable el botón que he puesto en la cabecera para que no aparezca en todas las páginas (en la de reserva por ejemplo) */}
//       <OwnBodySidebar showSidebar={a} />
//       {/* {props.children} */}
//       <OwnFooter />
//     </Grommet>
//   )
// };

// export default Layout;