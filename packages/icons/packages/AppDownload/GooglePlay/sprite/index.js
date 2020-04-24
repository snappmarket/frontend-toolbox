/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR) {
  // eslint-disable-next-line global-require
  require('./GooglePlay.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const GooglePlay = ({ className, size }) => 
  <svg 
    viewBox="0 0 128 40"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#GooglePlay`} />
  </svg>;

GooglePlay.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GooglePlay.defaultProps = {
  size: 1.5,
};

export default GooglePlay;

