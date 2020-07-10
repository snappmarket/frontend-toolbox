/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctGraph = ({ className, size }) => (
  <svg
    data-testid="OctGraph"
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

OctGraph.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctGraph.defaultProps = {
  size: 1.5,
};

export default OctGraph;
