/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ResizeIcon = ({ className, size }) => (
  <svg
    data-testid="ResizeIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M10 8v1.294l-4.294-4.294h1.294v-1h-2.5c-0.275 0-0.5 0.225-0.5 0.5v2.5h1v-1.294l4.294 4.294h-1.294v1h2.5c0.275 0 0.5-0.225 0.5-0.5v-2.5h-1z"></path>
    <path d="M22 0h-20c-1.103 0-2 0.897-2 2v20c0 1.103 0.897 2 2 2h20c1.103 0 2-0.897 2-2v-20c0-1.103-0.897-2-2-2zM2 2h20v10h-8c-1.103 0-2 0.897-2 2v8h-10v-20zM22 22h-8v-8h8v8c0 0 0 0 0 0z"></path>
  </svg>
);

ResizeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ResizeIcon.defaultProps = {
  size: 1.5,
};

export default ResizeIcon;
