/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const RoadIcon = ({ className, size }) => (
  <svg
    data-testid="RoadIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M6 0.144l-4.978 23.397c-0.016 0.069-0.022 0.138-0.022 0.209v0.25h2v-0.144l4.978-23.397c0.016-0.069 0.022-0.138 0.022-0.209v-0.25h-2v0.144z"></path>
    <path d="M22.978 23.541l-4.978-23.397v-0.144h-2v0.25c0 0.069 0.006 0.141 0.022 0.209l4.978 23.397v0.144h2v-0.25c0-0.069-0.006-0.141-0.022-0.209z"></path>
    <path d="M11 0h2v4h-2v-4z"></path>
    <path d="M11 7h2v6h-2v-6z"></path>
    <path d="M11 17h2v7h-2v-7z"></path>
  </svg>
);

RoadIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

RoadIcon.defaultProps = {
  size: 1.5,
};

export default RoadIcon;
