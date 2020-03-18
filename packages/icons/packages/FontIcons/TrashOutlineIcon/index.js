import * as React from 'react';
import PropTypes from 'prop-types';

const TrashOutlineIcon = ({ className, size, color }) => (
  <svg
    data-testid="TrashOutlineIcon"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={color}
  >
    <title>trash-o</title>
    <path d="M27.88 4.983h-24.082c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h24.082c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM18.333 3.392h-4.992c-0.566 0-1.024-0.458-1.024-1.024s0.458-1.024 1.024-1.024v0h4.992c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0zM25.541 31.14h-19.405c-0.566 0-1.024-0.458-1.024-1.024v0-21.144c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 20.12h17.357v-20.12c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 21.144c0 0.566-0.458 1.024-1.024 1.024v0zM10.852 25.572c-0.566 0-1.024-0.458-1.024-1.024v0-11.427c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 11.427c0 0.566-0.458 1.024-1.024 1.024v0zM16.059 25.572c-0.566 0-1.024-0.458-1.024-1.024v0-11.427c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v11.427c0 0.566-0.458 1.024-1.024 1.024v0zM20.832 25.572c-0.566 0-1.024-0.458-1.024-1.024v0-11.427c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 11.427c0 0.566-0.458 1.024-1.024 1.024v0z" />{' '}
  </svg>
);

TrashOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

TrashOutlineIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default TrashOutlineIcon;
