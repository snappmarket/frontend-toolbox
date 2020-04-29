/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./ShoppingCartIcon.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `${process.env.PUBLIC_URL}/sprite.svg`;
}

const ShoppingCartIcon = ({ className, size }) => (
  <svg
    data-testid="ShoppingCartIcon"
    viewBox="0 0 16 14.063"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#ShoppingCartIcon`} />
  </svg>
);

ShoppingCartIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShoppingCartIcon.defaultProps = {
  size: 1.5,
};

export default ShoppingCartIcon;
