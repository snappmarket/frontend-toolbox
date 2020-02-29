import * as React from 'react';
import PropTypes from 'prop-types';

const PencilIcon = ({ className, size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="293.334"
    height="293.359"
    viewBox="0 0 293.334 293.359"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill={color}
  >
    <g transform="translate(-108.189 -0.261)">
      <path d="M376.629,13.441a45,45,0,0,0-63.641,0L134.582,191.848a10,10,0,0,0-2.566,4.4l-23.461,84.7a10,10,0,0,0,12.3,12.309l84.7-23.465a10,10,0,0,0,4.4-2.566l178.4-178.41a45.05,45.05,0,0,0,0-63.641ZM156.371,198.348,302.383,52.332l47.09,47.09L203.457,245.438Zm-9.406,18.875,37.621,37.625-52.039,14.418ZM374.223,74.676,363.617,85.281,316.523,38.188l10.609-10.605a25,25,0,0,1,35.352,0l11.738,11.734A25.036,25.036,0,0,1,374.223,74.676Zm0,0" />
    </g>
  </svg>
);

PencilIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

PencilIcon.defaultProps = {
  size: 1.5,
  color: '#000000'
};

export default PencilIcon;
