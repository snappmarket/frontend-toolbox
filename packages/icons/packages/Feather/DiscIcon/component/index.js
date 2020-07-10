/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DiscIcon = ({ className, size }) => (
  <svg
    data-testid="DiscIcon"
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
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

DiscIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DiscIcon.defaultProps = {
  size: 1.5,
};

export default DiscIcon;
