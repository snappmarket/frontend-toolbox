/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FeatherPercent = ({ className, size }) => (
  <svg
    data-testid="FeatherPercent"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <line x1="19" y1="5" x2="5" y2="19"></line>
    <circle cx="6.5" cy="6.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
);

FeatherPercent.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FeatherPercent.defaultProps = {
  size: 1.5,
};

export default FeatherPercent;
