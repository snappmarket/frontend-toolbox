/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FileIcon = ({ className, size }) => (
  <svg
    data-testid="FileIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </svg>
);

FileIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FileIcon.defaultProps = {
  size: 1.5,
};

export default FileIcon;
