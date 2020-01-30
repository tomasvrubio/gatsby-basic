import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <p>Hello Gatsby!</p>
    <p>{process.env.GATSBY_FUNC_PATH}</p>
    <Link to="/account">Go to your account</Link>
    {/* <a href="/.netlify/functions/hello">Trigger Function here</a> */}
    <a href={process.env.GATSBY_FUNC_PATH + "/hello"}>Trigger hello Function here</a>
  </div>
)