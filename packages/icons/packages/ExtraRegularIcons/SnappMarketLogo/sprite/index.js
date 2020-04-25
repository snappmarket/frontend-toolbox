/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./SnappMarketLogo.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const SnappMarketLogo = ({ className, size }) => 
  <svg 
    data-testid="SnappMarketLogo"
    viewBox="0 0 200 100"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#SnappMarketLogo`} />
  </svg>;

SnappMarketLogo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SnappMarketLogo.defaultProps = {
  size: 1.5,
};

export default SnappMarketLogo;

