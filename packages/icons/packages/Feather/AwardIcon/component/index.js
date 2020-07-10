/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const AwardIcon = ({ className, size }) => (
  <svg
    data-testid="AwardIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

AwardIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

AwardIcon.defaultProps = {
  size: 1.5,
};

export default AwardIcon;
