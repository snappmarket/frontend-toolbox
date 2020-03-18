import * as React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ className, size, color }) => (
  <svg
    data-testid="PlusIcon"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 204 204"
  >
    <rect x="92" y="1" width="18" height="203" rx="8" ry="8" />
    <rect y="94" width="203" height="18" rx="8" ry="8" />
  </svg>
);
PlusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

PlusIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default PlusIcon;
