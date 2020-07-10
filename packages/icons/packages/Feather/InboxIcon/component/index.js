/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const InboxIcon = ({ className, size }) => (
  <svg
    data-testid="InboxIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
  </svg>
);

InboxIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

InboxIcon.defaultProps = {
  size: 1.5,
};

export default InboxIcon;
