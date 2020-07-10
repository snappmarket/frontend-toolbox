/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ExpandIcon = ({ className, size }) => (
  <svg
    data-testid="ExpandIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M7 2v-2h-6c-0.553 0-1 0.447-1 1v6h2v-3.584l5.544 5.544 1.416-1.416-5.544-5.544h3.584z"></path>
    <path d="M7.544 15.044l-5.544 5.541v-3.584h-2v6c0 0.553 0.447 1 1 1h6v-2h-3.584l5.544-5.544-1.416-1.413z"></path>
    <path d="M22 20.584l-5.544-5.541-1.416 1.416 5.544 5.541h-3.584v2h6c0.553 0 1-0.447 1-1v-6h-2v3.584z"></path>
    <path d="M23 0h-6v2h3.584l-5.541 5.544 1.416 1.416 5.541-5.544v3.584h2v-6c0-0.553-0.447-1-1-1z"></path>
  </svg>
);

ExpandIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ExpandIcon.defaultProps = {
  size: 1.5,
};

export default ExpandIcon;
