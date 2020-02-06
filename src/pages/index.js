import React from "react"
import { Link } from "gatsby"
import { AtlassianNavigation, PrimaryButton, PrimaryDropdownButton} from "@atlaskit/atlassian-navigation";
import "@atlaskit/css-reset";


export default () => (
  <div>
    <AtlassianNavigation
      primaryItems={[
        <PrimaryButton>Issues</PrimaryButton>,
        <PrimaryDropdownButton>Services</PrimaryDropdownButton>,
      ]}
    />  
    <p>Hello Gatsby!</p>
    <p>{process.env.GATSBY_FUNC_PATH}</p>
    <Link to="/account">Go to your account</Link>
    {/* <a href="/.netlify/functions/hello">Trigger Function here</a> */}
    <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
  </div>
)