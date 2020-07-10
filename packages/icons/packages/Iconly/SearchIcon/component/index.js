/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({ className, size }) => (
  <svg
    data-testid="SearchIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#200E32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      transform="translate(2 2)"
    >
      <circle cx="9.767" cy="9.767" r="8.989"></circle>
      <line x1="16.018" x2="19.542" y1="16.485" y2="20"></line>
    </g>
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
