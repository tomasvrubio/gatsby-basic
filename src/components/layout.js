import React from 'react';
import { Grommet } from 'grommet';

import OwnAppBar from './header';
import OwnFooter from './footer';
import OwnBodySidebar from './bodysidebar';

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

const Layout = props => {
  
  // this.state = {
  //   showSidebar: true
  // }
  

  const a = "hola"

  return (
    <Grommet theme={theme}>
      {/* TODO: Cambiar el header de las páginas */}
      {/* <Head>
        <title>Horizontal Working</title>
      </Head> */}
      <OwnAppBar />
      {/* TODO: Hacer que sea variable el botón que he puesto en la cabecera para que no aparezca en todas las páginas (en la de reserva por ejemplo) */}
      <OwnBodySidebar showSidebar={a} />
      {/* {props.children} */}
      <OwnFooter />
    </Grommet>
  )
};

export default Layout;