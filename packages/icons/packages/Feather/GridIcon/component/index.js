/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const GridIcon = ({ className, size }) => (
  <svg
    data-testid="GridIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

GridIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

GridIcon.defaultProps = {
  size: 1.5,
};

export default GridIcon;
