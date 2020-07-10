/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const IndeterminateCheckBox = ({ className, size }) => (
  <svg
    data-testid="IndeterminateCheckBox"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path>
  </svg>
);

IndeterminateCheckBox.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IndeterminateCheckBox.defaultProps = {
  size: 1.5,
};

export default IndeterminateCheckBox;
