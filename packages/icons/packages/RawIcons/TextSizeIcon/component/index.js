/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const TextSizeIcon = ({ className, size }) => (
  <svg
    data-testid="TextSizeIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M24 2h-18v2h8v18h2v-18h8z"></path>
    <path d="M0 13h4v9h2v-9h4v-2h-10z"></path>
  </svg>
);

TextSizeIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

TextSizeIcon.defaultProps = {
  size: 1.5,
};

export default TextSizeIcon;
