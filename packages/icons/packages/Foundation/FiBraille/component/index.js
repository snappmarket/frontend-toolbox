/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FiBraille = ({ className, size }) => (
  <svg
    data-testid="FiBraille"
    viewBox="0 0 100 100"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <g>
      <circle cx="31.102" cy="23.979" r="6.978"></circle>
      <circle cx="68.898" cy="23.979" r="6.978"></circle>
      <circle cx="31.102" cy="50" r="6.978"></circle>
      <circle cx="68.898" cy="50" r="6.978"></circle>
      <circle cx="31.102" cy="76.02" r="6.978"></circle>
      <circle cx="68.898" cy="76.02" r="6.978"></circle>
    </g>
  </svg>
);

FiBraille.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FiBraille.defaultProps = {
  size: 1.5,
};

export default FiBraille;
