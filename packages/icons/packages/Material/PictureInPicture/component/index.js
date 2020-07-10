/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PictureInPicture = ({ className, size }) => (
  <svg
    data-testid="PictureInPicture"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path>
  </svg>
);

PictureInPicture.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PictureInPicture.defaultProps = {
  size: 1.5,
};

export default PictureInPicture;
