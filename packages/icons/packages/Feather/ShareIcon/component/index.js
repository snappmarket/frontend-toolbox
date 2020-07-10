/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ShareIcon = ({ className, size }) => (
  <svg
    data-testid="ShareIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
    <polyline points="16 6 12 2 8 6"></polyline>
    <line x1="12" y1="2" x2="12" y2="15"></line>
  </svg>
);

ShareIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShareIcon.defaultProps = {
  size: 1.5,
};

export default ShareIcon;
