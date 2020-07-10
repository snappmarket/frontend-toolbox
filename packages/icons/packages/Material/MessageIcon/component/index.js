/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MessageIcon = ({ className, size }) => (
  <svg
    data-testid="MessageIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>
  </svg>
);

MessageIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MessageIcon.defaultProps = {
  size: 1.5,
};

export default MessageIcon;
