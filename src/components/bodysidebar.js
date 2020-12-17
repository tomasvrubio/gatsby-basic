// Con que me quedo de aquí??

import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Button, Collapsible, Layer, Text } from "grommet"
import { FormClose, ProductHunt } from "grommet-icons"


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



class OwnBodySidebar extends React.Component {
  render() {
    return (
      <Box direction='row' flex overflow={{ horizontal: 'hidden' }} pad="xsmall">
        <Box flex align='center' >
          {this.props.children}
        </Box>
        {(!this.props.showSidebar) ? (
          <Collapsible direction="horizontal" open={this.props.showSidebar}>
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
                onClick={() => {}}
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
    )
  }
}

export default OwnBodySidebar;