/**
* THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

if(!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./ShoppingBasketIcon.svg');
}

let importPrefix = '';
if(process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const ShoppingBasketIcon = ({ className, size }) => 
  <svg 
    data-testid="ShoppingBasketIcon"
    viewBox="0 0 23 21.013"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref={`${importPrefix}#ShoppingBasketIcon`} />
  </svg>;

ShoppingBasketIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShoppingBasketIcon.defaultProps = {
  size: 1.5,
};

export default ShoppingBasketIcon;

