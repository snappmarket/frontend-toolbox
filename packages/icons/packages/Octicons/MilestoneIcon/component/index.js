/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const MilestoneIcon = ({ className, size }) => (
  <svg
    data-testid="MilestoneIcon"
    viewBox="0 0 14 16"
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
      d="M8 2H6V0h2v2zm4 5H2c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h10l2 2-2 2zM8 4H6v2h2V4zM6 16h2V8H6v8z"
    ></path>
  </svg>
);

MilestoneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

MilestoneIcon.defaultProps = {
  size: 1.5,
};

export default MilestoneIcon;
