import React, { useState } from "react"
import { Link } from "gatsby"
import { Anchor, Box, Button, Collapsible, Footer, Grommet, Heading, Layer, ResponsiveContext, Text } from "grommet"
import { Sidebar, FormClose, ProductHunt, Ticket, Gremlin, Gatsbyjs } from "grommet-icons"

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
    <Grommet theme={theme} >
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill >
            {/* Barra de aplicación */}
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
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            {/* Body */}
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }} pad="xsmall">
              <Box flex align='center' >
                app body
                <div>
                  <p>Hello Gatsby!</p>
                  <p>{process.env.GATSBY_FUNC_PATH}</p>
                  <Link to="/account">Go to your account</Link>
                  {/* <a href="/.netlify/functions/hello">Trigger Function here</a> */}
                  <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
                </div>
                <Box direction='row' fill="horizontal" justify="center" wrap="true">
                  <Box align='center' background="dark-3" border="all" margin="small" pad="xlarge" width="medium">Tarjeta 1</Box>
                  <Box align='center' background="dark-3" border="all" margin="small"  pad="xlarge" width="medium">Tarjeta 2</Box>
                  <Box align='center' background="dark-3" border="all" margin="small"  pad="xlarge" width="medium">Tarjeta 3</Box>
                </Box>
                <Box direction="row" gap="medium" pad="large">
                  <Button
                    icon={<Ticket />}
                    label="Reserva"
                    color="Yellow"
                    primary="true"
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
              {/* Barra lateral */}
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
            {/* Footer */}
            <Footer background="brand" flex>
              <Box>
                <Text size="small">Copyright <Anchor label="@tomasvrubio" href="https://github.com/tomasvrubio" /></Text>
                <Text size="small">with Grommet <Gremlin size="small" /></Text>
                <Text size="small">and Gatsby <Gatsbyjs size="small"/></Text>
              </Box>
              <Anchor label="About" />
              <Box margin={{ vertical: `xsmall` }}>
                <SideBarLink to="/account" text="Admin" icon={ProductHunt} />
                <SideBarLink to="/account" text="Admin" icon={ProductHunt} />
              </Box>
            </Footer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}


export default IndexPage