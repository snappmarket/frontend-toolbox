/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ChromeIcon = ({ className, size }) => (
  <svg
    data-testid="ChromeIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="21.17" y1="8" x2="12" y2="8"></line>
    <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
    <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
  </svg>
);

ChromeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ChromeIcon.defaultProps = {
  size: 1.5,
};

export default ChromeIcon;
