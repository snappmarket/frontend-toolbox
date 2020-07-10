/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ActivityIcon = ({ className, size }) => (
  <svg
    data-testid="ActivityIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

ActivityIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ActivityIcon.defaultProps = {
  size: 1.5,
};

export default ActivityIcon;
