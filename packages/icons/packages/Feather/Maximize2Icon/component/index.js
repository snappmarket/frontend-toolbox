/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const Maximize2Icon = ({ className, size }) => (
  <svg
    data-testid="Maximize2Icon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="15 3 21 3 21 9"></polyline>
    <polyline points="9 21 3 21 3 15"></polyline>
    <line x1="21" y1="3" x2="14" y2="10"></line>
    <line x1="3" y1="21" x2="10" y2="14"></line>
  </svg>
);

Maximize2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Maximize2Icon.defaultProps = {
  size: 1.5,
};

export default Maximize2Icon;
