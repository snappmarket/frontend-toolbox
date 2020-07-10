/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const StarIcon = ({ className, size }) => (
  <svg
    data-testid="StarIcon"
    viewBox="0 0 14 16"
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
      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
    ></path>
  </svg>
);

StarIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

StarIcon.defaultProps = {
  size: 1.5,
};

export default StarIcon;
