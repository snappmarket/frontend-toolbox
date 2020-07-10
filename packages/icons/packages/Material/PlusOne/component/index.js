/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PlusOne = ({ className, size }) => (
  <svg
    data-testid="PlusOne"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"></path>
  </svg>
);

PlusOne.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PlusOne.defaultProps = {
  size: 1.5,
};

export default PlusOne;
