/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ChatIcon = ({ className, size }) => (
  <svg
    data-testid="ChatIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
  </svg>
);

ChatIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ChatIcon.defaultProps = {
  size: 1.5,
};

export default ChatIcon;
