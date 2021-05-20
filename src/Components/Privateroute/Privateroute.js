// import React from "react";
// const Privateroute =()=> {
//   return (
//     <Route {...rest} render={({location}) => (
//       fakeAuth.isAuthenticated ? (

//           children

//       ) : (
//         <Redirect to={{
//           pathname: '/',
//           state: { from: props.location }
//         }} />
//   )
// }
// export default Privateroute;

import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [logInUser, setLogInUser] = useContext(UserContext);
  // const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <Route
      {...rest}
      render={({ location }) =>
        logInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
