import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

/* eslint-disable no-nested-ternary */
const RouteGate = props => {
  const {
    component: Component,
    hasPermission,
    redirectTo,
    render,
    ...rest
  } = props;

  return (
    <Route
      render={() =>
        hasPermission ? (
          Component ? (
            <Component {...props} />
          ) : (
            render()
          )
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
            }}
          />
        )
      }
      {...rest}
    />
  );
};

RouteGate.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
  location: PropTypes.object,
  hasPermission: PropTypes.bool,
  redirectTo: PropTypes.string,
};

RouteGate.defaultProps = {
  hasPermission: true,
  redirectTo: '',
};

export default RouteGate;
