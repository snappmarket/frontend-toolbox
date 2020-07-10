/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DragHandleIcon = ({ className, size }) => (
  <svg
    data-testid="DragHandleIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path>
  </svg>
);

DragHandleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DragHandleIcon.defaultProps = {
  size: 1.5,
};

export default DragHandleIcon;
