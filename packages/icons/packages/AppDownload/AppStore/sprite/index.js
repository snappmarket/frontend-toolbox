/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./AppStore.svg');
}

const AppStore = ({ className, size }) => 
  <svg 
    viewBox="44.2 -25 128 40"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`/${process.env.PUBLIC_URL}/sprite.svg#AppStore`} />
  </svg>;

AppStore.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AppStore.defaultProps = {
  size: 1.5,
};

export default AppStore;

