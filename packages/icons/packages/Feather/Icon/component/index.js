/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, size }) => (
  <svg
    data-testid="Icon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
    <line x1="16" y1="8" x2="2" y2="22"></line>
    <line x1="17.5" y1="15" x2="9" y2="15"></line>
  </svg>
);

Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 1.5,
};

export default Icon;
