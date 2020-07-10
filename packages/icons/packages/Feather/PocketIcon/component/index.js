/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PocketIcon = ({ className, size }) => (
  <svg
    data-testid="PocketIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
    <polyline points="8 10 12 14 16 10"></polyline>
  </svg>
);

PocketIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PocketIcon.defaultProps = {
  size: 1.5,
};

export default PocketIcon;
