import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Button, Collapsible, Grommet, Heading, Layer, ResponsiveContext, Text } from "grommet"
import { Sidebar, FormClose, ProductHunt } from "grommet-icons"

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
    
const IndexPage = () => {    
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Box direction='row'>
                <Button
                  icon={<ProductHunt />}
                  onClick={() => {}}
                />
                <Heading level='3' margin='none'>miNegocio</Heading>
              </Box>
              <Button
                icon={<Sidebar />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' >
                app body
                <div>
                  <p>Hello Gatsby!</p>
                  <p>{process.env.GATSBY_FUNC_PATH}</p>
                  <Link to="/account">Go to your account</Link>
                  {/* <a href="/.netlify/functions/hello">Trigger Function here</a> */}
                  <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
                </div>
                <Box margin='medium' direction='row' flex>
                  <Box flex align='center'>Tarjeta 1</Box>
                  <Box flex align='center'>Tarjeta 2</Box>
                  <Box flex align='center'>Tarjeta 3</Box>
                </Box>
              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
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
                      <SideBarLink to="/account" text="Admin" icon={ProductHunt} />
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
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}


export default IndexPage