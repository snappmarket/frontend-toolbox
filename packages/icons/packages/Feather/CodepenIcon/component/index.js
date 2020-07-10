/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CodepenIcon = ({ className, size }) => (
  <svg
    data-testid="CodepenIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
    <line x1="12" y1="22" x2="12" y2="15.5"></line>
    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
    <line x1="12" y1="2" x2="12" y2="8.5"></line>
  </svg>
);

CodepenIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CodepenIcon.defaultProps = {
  size: 1.5,
};

export default CodepenIcon;
