/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const GiftIcon = ({ className, size }) => (
  <svg
    data-testid="GiftIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="20 12 20 22 4 22 4 12"></polyline>
    <rect x="2" y="7" width="20" height="5"></rect>
    <line x1="12" y1="22" x2="12" y2="7"></line>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
  </svg>
);

GiftIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GiftIcon.defaultProps = {
  size: 1.5,
};

export default GiftIcon;
