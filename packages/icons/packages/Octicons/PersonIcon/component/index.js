/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const PersonIcon = ({ className, size }) => (
  <svg
    data-testid="PersonIcon"
    viewBox="0 0 12 16"
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
      d="M12 14.002a.998.998 0 01-.998.998H1.001A1 1 0 010 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"
    ></path>
  </svg>
);

PersonIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PersonIcon.defaultProps = {
  size: 1.5,
};

export default PersonIcon;
