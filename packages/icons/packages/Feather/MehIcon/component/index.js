/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MehIcon = ({ className, size }) => (
  <svg
    data-testid="MehIcon"
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
    <line x1="8" y1="15" x2="16" y2="15"></line>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

MehIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MehIcon.defaultProps = {
  size: 1.5,
};

export default MehIcon;
