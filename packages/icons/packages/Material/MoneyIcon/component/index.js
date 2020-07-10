/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MoneyIcon = ({ className, size }) => (
  <svg
    data-testid="MoneyIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <React.Fragment>
      <path d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"></path>
      <path d="M2 4v16h20V4H2zm2 14V6h16v12H4z"></path>
    </React.Fragment>
    , 'Money',
  </svg>
);

MoneyIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MoneyIcon.defaultProps = {
  size: 1.5,
};

export default MoneyIcon;
