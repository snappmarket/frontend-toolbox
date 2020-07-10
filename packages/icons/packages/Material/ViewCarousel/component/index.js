/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ViewCarousel = ({ className, size }) => (
  <svg
    data-testid="ViewCarousel"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path>
  </svg>
);

ViewCarousel.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ViewCarousel.defaultProps = {
  size: 1.5,
};

export default ViewCarousel;
