/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherClipboard = ({ className, size }) => (
  <svg
    data-testid="FeatherClipboard"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
  </svg>
);

FeatherClipboard.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherClipboard.defaultProps = {
  size: 1.5,
};

export default FeatherClipboard;
