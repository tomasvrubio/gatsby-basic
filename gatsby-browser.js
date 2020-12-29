import React from 'react';
import { navigate } from 'gatsby';
import { Auth0Provider } from '@auth0/auth0-react';

import './src/styles/global.css';

const onRedirectCallback = (appState) => navigate(appState?.returnTo || '/');

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENTID}
      audience={process.env.GATSBY_AUTH0_AUDIENCE}
      scope={process.env.GATSBY_AUTH0_SCOPE}
      redirectUri={process.env.GATSBY_AUTH0_RETURNTO}
      onRedirectCallback={process.env.GATSBY_AUTH0_CALLBACK}
    >
      {element}
    </Auth0Provider>
  );
};




// import React from "react"
// import { silentAuth } from "./src/utils/auth"

// import './src/styles/global.css'

// class SessionCheck extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loading: true,
//     }
//   }

//   handleCheckSession = () => {
//     this.setState({ loading: false })
//   }

//   componentDidMount() {
//     silentAuth(this.handleCheckSession)
//   }

//   render() {
//     return (
//       this.state.loading === false && (
//         <React.Fragment>{this.props.children}</React.Fragment>
//       )
//     )
//   }
// }

// export const wrapRootElement = ({ element }) => {
//   return <SessionCheck>{element}</SessionCheck>
// }