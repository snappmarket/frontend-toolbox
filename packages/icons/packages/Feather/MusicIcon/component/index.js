/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MusicIcon = ({ className, size }) => (
  <svg
    data-testid="MusicIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

MusicIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MusicIcon.defaultProps = {
  size: 1.5,
};

export default MusicIcon;
