import React from 'react';
import PropTypes from 'prop-types';

const ShoppingCartIcon = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="14.063"
    viewBox="0 0 16 14.063"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
  >
    <path
      fill="#757575"
      d="M5.155 9.375h8.5a.469.469 0 0 0 .451-.34l1.875-6.563a.469.469 0 0 0-.451-.6H4.074L3.739.367A.469.469 0 0 0 3.281 0H.469a.469.469 0 0 0 0 .938h2.436L4.6 8.553a1.406 1.406 0 0 0 .559 2.7h8.5a.469.469 0 1 0 0-.937h-8.5a.469.469 0 0 1 0-.937zm9.755-6.562L13.3 8.438H5.532l-1.25-5.625zm0 0"
    />
    <path
      fill="#757575"
      d="M150 361.406a1.406 1.406 0 1 0 1.406-1.406 1.408 1.408 0 0 0-1.406 1.406zm1.406-.469a.469.469 0 1 1-.469.469.469.469 0 0 1 .469-.469zm0 0"
      transform="translate(-145.312 -348.75)"
    />
    <path
      fill="#757575"
      d="M362 361.406a1.406 1.406 0 1 0 1.406-1.406 1.408 1.408 0 0 0-1.406 1.406zm1.406-.469a.469.469 0 1 1-.469.469.469.469 0 0 1 .469-.469zm0 0"
      transform="translate(-350.688 -348.75)"
    />
  </svg>
);

ShoppingCartIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ShoppingCartIcon.defaultProps = {
  size: 1.5,
};

export default ShoppingCartIcon;
