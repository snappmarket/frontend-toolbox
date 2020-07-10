/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const OctPencil = ({ className, size }) => (
  <svg
    data-testid="OctPencil"
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
      d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
    ></path>
  </svg>
);

OctPencil.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

OctPencil.defaultProps = {
  size: 1.5,
};

export default OctPencil;
