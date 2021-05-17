import React from "react";
const Privateroute =()=> {
  return (
    <Route {...rest} render={({location}) => (
      fakeAuth.isAuthenticated ? (
        
          children
      
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
  )
}
export default Privateroute;