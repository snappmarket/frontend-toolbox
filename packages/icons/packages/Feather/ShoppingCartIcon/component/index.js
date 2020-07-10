/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartIcon = ({ className, size }) => (
  <svg
    data-testid="ShoppingCartIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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
