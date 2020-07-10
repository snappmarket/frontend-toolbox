/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ProjectIcon = ({ className, size }) => (
  <svg
    data-testid="ProjectIcon"
    viewBox="0 0 15 16"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"
    ></path>
  </svg>
);

ProjectIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ProjectIcon.defaultProps = {
  size: 1.5,
};

export default ProjectIcon;
