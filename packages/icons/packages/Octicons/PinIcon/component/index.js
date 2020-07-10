/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PinIcon = ({ className, size }) => (
  <svg
    data-testid="PinIcon"
    viewBox="0 0 16 16"
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
      d="M10 1.2V2l.5 1L6 6H2.2c-.44 0-.67.53-.34.86L5 10l-4 5 5-4 3.14 3.14a.5.5 0 00.86-.34V10l3-4.5 1 .5h.8c.44 0 .67-.53.34-.86L10.86.86a.5.5 0 00-.86.34z"
    ></path>
  </svg>
);

PinIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PinIcon.defaultProps = {
  size: 1.5,
};

export default PinIcon;
