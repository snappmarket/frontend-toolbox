/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./EmptyBasketIcon.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const EmptyBasketIcon = ({ className, size }) => 
  <svg 
    data-testid="EmptyBasketIcon"
    viewBox="0 0 588.000000 378.000000"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#EmptyBasketIcon`} />
  </svg>;

EmptyBasketIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EmptyBasketIcon.defaultProps = {
  size: 1.5,
};

export default EmptyBasketIcon;

