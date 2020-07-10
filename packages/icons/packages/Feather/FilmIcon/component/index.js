/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const FilmIcon = ({ className, size }) => (
  <svg
    data-testid="FilmIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </svg>
);

FilmIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

FilmIcon.defaultProps = {
  size: 1.5,
};

export default FilmIcon;
