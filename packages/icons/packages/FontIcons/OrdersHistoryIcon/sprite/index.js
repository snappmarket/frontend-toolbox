/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

if (!process.env.SSR && !process.env.CI) {
  // eslint-disable-next-line global-require
  require('./OrdersHistoryIcon.svg');
}

let importPrefix = '';
if (process.env.PUBLIC_URL) {
  importPrefix = `/${process.env.PUBLIC_URL}/sprite.svg`;
}

const OrdersHistoryIcon = ({ className, size }) => (
  <svg
    data-testid="OrdersHistoryIcon"
    viewBox="0 0 32 32"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor"
  >
    <use xlinkHref={`${importPrefix}#OrdersHistoryIcon`} />
  </svg>
);

OrdersHistoryIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OrdersHistoryIcon.defaultProps = {
  size: 1.5,
};

export default OrdersHistoryIcon;
