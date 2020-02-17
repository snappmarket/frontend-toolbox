import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({ className, size }) => (
  <svg
    id="SearchIcon"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
  >
    <path
      d="M14.283 22.065a7.641 7.641 0 0 0 4.97-1.812l6.04 6.04a.708.708 0 0 0 1 0 .708.708 0 0 0 0-1l-6.04-6.04a7.77 7.77 0 1 0-5.971 2.813zm0-14.15a6.368 6.368 0 1 1-6.368 6.368 6.374 6.374 0 0 1 6.368-6.368z"
      transform="translate(-6.5 -6.5)"
    />
  </svg>
);

SearchIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SearchIcon.defaultProps = {
  size: 1.5,
};
export default SearchIcon;
