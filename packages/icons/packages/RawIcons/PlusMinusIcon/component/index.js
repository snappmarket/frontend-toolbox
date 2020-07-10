/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PlusMinusIcon = ({ className, size }) => (
  <svg
    data-testid="PlusMinusIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M13 9v-8h-2v8h-9v2h9v8h2v-8h9v-2z"></path>
    <path d="M2 21h20v2h-20v-2z"></path>
  </svg>
);

PlusMinusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PlusMinusIcon.defaultProps = {
  size: 1.5,
};

export default PlusMinusIcon;
