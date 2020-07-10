/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const Slideshow = ({ className, size }) => (
  <svg
    data-testid="Slideshow"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
  </svg>
);

Slideshow.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Slideshow.defaultProps = {
  size: 1.5,
};

export default Slideshow;
