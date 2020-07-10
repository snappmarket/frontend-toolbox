/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CameraIcon = ({ className, size }) => (
  <svg
    data-testid="CameraIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

CameraIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CameraIcon.defaultProps = {
  size: 1.5,
};

export default CameraIcon;
