import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { userSelectors } from 'ducks';
import { getCookie } from 'constants/ServerWrappers/cookieHelperWrapper';
import generateRoutes from './helpers/generateRoutes';
import routers from './routers';

const Router = () => {
  /**
   * Make permission variables here
   */
  const isUserLoggedIn = useSelector(state =>
    userSelectors.getLoggedInStatus(state),
  );
  const basketProducts = getCookie('hasBasket');

  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          {routers.map(route =>
            generateRoutes(route, {
              isUserLoggedIn,
              basketProducts,
            }),
          )}
        </Switch>
      )}
    />
  );
};

export default Router;
