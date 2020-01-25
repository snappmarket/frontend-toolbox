import React from 'react';
import PropTypes from 'prop-types';

const DeleteIcon = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 70.711 70.711"
    className={className}
    onClick={onClick}
  >
    <g transform="translate(-925 -180)">
      <rect
        width="86"
        height="14"
        rx="7"
        transform="translate(995.711 189.899) rotate(135)"
        fill="#fff"
      />
      <rect
        width="86.001"
        height="14"
        rx="7"
        transform="translate(985.812 250.711) rotate(-135)"
        fill="#fff"
      />
    </g>
  </svg>
);

DeleteIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

DeleteIcon.defaultProps = {
  onClick: (f) => f,
};

export default DeleteIcon;
