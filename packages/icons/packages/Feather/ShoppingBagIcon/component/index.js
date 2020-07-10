/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ShoppingBagIcon = ({ className, size }) => (
  <svg
    data-testid="ShoppingBagIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

ShoppingBagIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShoppingBagIcon.defaultProps = {
  size: 1.5,
};

export default ShoppingBagIcon;
