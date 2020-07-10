/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DockIcon = ({ className, size }) => (
  <svg
    data-testid="DockIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M8 23h8v-2H8v2zm8-21.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM16 15H8V5h8v10z"></path>
  </svg>
);

DockIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DockIcon.defaultProps = {
  size: 1.5,
};

export default DockIcon;
