import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthRoute (props) {
  const {
    // The `component` will be rendered with JSX.
    // When rendering component, their names must
    // always be capitalized. This is why we rename
    // the component variable to Component.
    component: Component,
    isAuthenticated = false,
    ...restProps
    // restProps is going to be an containing
    // all properties except for the ones that were
    // destructured
  } = props;

  return (
    <Route
      {...restProps}
      render={
        props => isAuthenticated ? (
          <Component {...props} />
          // React.createElement(Component,{ ...props})
        ) : (
          <Redirect to="/sign_in" />
        )
      }
    />
  )
}

export default AuthRoute;
