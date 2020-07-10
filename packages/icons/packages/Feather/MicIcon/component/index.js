/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MicIcon = ({ className, size }) => (
  <svg
    data-testid="MicIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);

MicIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MicIcon.defaultProps = {
  size: 1.5,
};

export default MicIcon;
