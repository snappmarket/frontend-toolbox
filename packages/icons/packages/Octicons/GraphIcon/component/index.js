/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const GraphIcon = ({ className, size }) => (
  <svg
    data-testid="GraphIcon"
    viewBox="0 0 16 16"
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
      d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"
    ></path>
  </svg>
);

GraphIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GraphIcon.defaultProps = {
  size: 1.5,
};

export default GraphIcon;
