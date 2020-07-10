/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PhotoCameraIcon = ({ className, size }) => (
  <svg
    data-testid="PhotoCameraIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <React.Fragment>
      <circle cx="12" cy="12" r="3.2"></circle>
      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
    </React.Fragment>
    , 'PhotoCamera',
  </svg>
);

PhotoCameraIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PhotoCameraIcon.defaultProps = {
  size: 1.5,
};

export default PhotoCameraIcon;
