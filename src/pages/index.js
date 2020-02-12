import React, {PureComponent, useState} from "react"
import { Link } from "gatsby"
import { Box, Button, Heading, Grommet } from "grommet"
import { Notification } from "grommet-icons"

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

// const [showSidebar, setShowSidebar] = useState(false)

// export default () => (
//   <Grommet theme={theme} full>
//     <Box fill>
//       <AppBar>
//         Hello Grommet!
//         <Heading level='3' margin='none'>My App</Heading>
//         <Button
//           icon={<Notification />}
//           onClick={() => setShowSidebar(!showSidebar)}
//         />
//       </AppBar>
//       <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
//       <Box flex align='center' justify='center'>
//         app body
//         <div>
//           <p>Hello Gatsby!</p>
//           <p>{process.env.GATSBY_FUNC_PATH}</p>
//           <Link to="/account">Go to your account</Link>
//           {/* <a href="/.netlify/functions/hello">Trigger Function here</a> */}
//           <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
//         </div>
//       </Box>
//       {showSidebar && (
//         <Box
//           width='medium'
//           background='light-2'
//           elevation='small'
//           align='center'
//           justify='center'
//         >
//           sidebar
//         </Box>
//       )}
//       </Box>
//     </Box>

//   </Grommet>
// )


// class IndexPage extends PureComponent {

//   render() {
    
const IndexPage = () => {    
    const [showSidebar, setShowSidebar] = useState(false)

    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            Hello Grommet!
            <Heading level='3' margin='none'>My App</Heading>
            <Button
              icon={<Notification />}
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            app body
            <div>
              <p>Hello Gatsby!</p>
              <p>{process.env.GATSBY_FUNC_PATH}</p>
              <Link to="/account">Go to your account</Link>
              {/* <a href="/.netlify/functions/hello">Trigger Function here</a> */}
              <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
            </div>
          </Box>
          {showSidebar && (
            <Box
              width='medium'
              background='light-2'
              elevation='small'
              align='center'
              justify='center'
            >
              sidebar
            </Box>
          )}
          </Box>
        </Box>

      </Grommet>
    )
  // }
}




export default IndexPage