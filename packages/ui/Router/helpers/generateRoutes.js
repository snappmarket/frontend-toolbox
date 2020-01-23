import React from 'react';
import Layout from 'components/Common/Layout';
import RouteGate from './RouteGate';
import checkPermissions from './checkPermissions';

/**
 * Recursively generate routes with access
 * @param route
 * @param selectedProps
 * @returns {*}
 */
const generateRoutes = (route, selectedProps) => {
  const { path, permissions, redirect, exact, Component } = route;
  const layout =
    typeof route.layout !== 'undefined' ? route.layout : 'advanced';

  let routes = null;
  if (Array.isArray(Component)) {
    routes = Component.map(item => generateRoutes(item, selectedProps));
  } else {
    routes = Component;
  }

  const hasPermission = checkPermissions(permissions, selectedProps);

  return (
    <RouteGate
      key={path}
      path={path}
      exact={exact}
      hasPermission={hasPermission}
      redirectTo={redirect || ''}
      render={() => (layout ? <Layout mode={layout}>{routes}</Layout> : routes)}
    />
  );
};

export default generateRoutes;
