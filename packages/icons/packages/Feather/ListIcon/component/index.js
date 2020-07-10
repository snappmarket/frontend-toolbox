/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ListIcon = ({ className, size }) => (
  <svg
    data-testid="ListIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

ListIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ListIcon.defaultProps = {
  size: 1.5,
};

export default ListIcon;
