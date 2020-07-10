/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const GitBranchIcon = ({ className, size }) => (
  <svg
    data-testid="GitBranchIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <line x1="6" y1="3" x2="6" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

GitBranchIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GitBranchIcon.defaultProps = {
  size: 1.5,
};

export default GitBranchIcon;
