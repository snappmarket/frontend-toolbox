import * as React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.971 47.971"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <path d="M514.744 961.208c-18.097 0-32.768-14.671-32.768-32.768v0-847.872c0-18.097 14.671-32.768 32.768-32.768s32.768 14.671 32.768 32.768v0 847.872c0 18.097-14.671 32.768-32.768 32.768v0zM938.68 537.272h-847.872c-18.097 0-32.768-14.671-32.768-32.768s14.671-32.768 32.768-32.768v0h847.872c18.097 0 32.768 14.671 32.768 32.768s-14.671 32.768-32.768 32.768v0z" />
  </svg>
);
PlusIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

PlusIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default PlusIcon;
