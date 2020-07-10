/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PaymentIcon = ({ className, size }) => (
  <svg
    data-testid="PaymentIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path>
  </svg>
);

PaymentIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PaymentIcon.defaultProps = {
  size: 1.5,
};

export default PaymentIcon;
