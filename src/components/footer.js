import React from "react"
import { Link } from "gatsby"
import { Anchor, Box, Footer, Text } from 'grommet';
import { Gremlin, Gatsbyjs } from "grommet-icons"


const OwnFooter = () => (
  <Footer background="brand" pad="small">
    <Box>
      <Text size="small">Copyright <Anchor label="@tomasvrubio" href="https://github.com/tomasvrubio" /></Text>
      <Text size="small">with Grommet <Gremlin size="small" /></Text>
      <Text size="small">and Gatsby <Gatsbyjs size="small"/></Text>
    </Box>
    <Anchor label="About" />
    <Box margin={{ vertical: `xsmall` }}>
      <Anchor label="Admin" href="/account"/>
    </Box>
  </Footer>
);


export default OwnFooter;