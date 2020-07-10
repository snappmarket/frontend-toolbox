/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DragHandleRounded = ({ className, size }) => (
  <svg
    data-testid="DragHandleRounded"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path>
  </svg>
);

DragHandleRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DragHandleRounded.defaultProps = {
  size: 1.5,
};

export default DragHandleRounded;
