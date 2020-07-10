/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const Repeat = ({ className, size }) => (
  <svg
    data-testid="Repeat"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
  </svg>
);

Repeat.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Repeat.defaultProps = {
  size: 1.5,
};

export default Repeat;
