/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DeleteIcon = ({ className, size }) => (
  <svg
    data-testid="DeleteIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
    <line x1="18" y1="9" x2="12" y2="15"></line>
    <line x1="12" y1="9" x2="18" y2="15"></line>
  </svg>
);

DeleteIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DeleteIcon.defaultProps = {
  size: 1.5,
};

export default DeleteIcon;
