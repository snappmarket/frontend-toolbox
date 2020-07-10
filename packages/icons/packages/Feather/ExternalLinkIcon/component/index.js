/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ExternalLinkIcon = ({ className, size }) => (
  <svg
    data-testid="ExternalLinkIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

ExternalLinkIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ExternalLinkIcon.defaultProps = {
  size: 1.5,
};

export default ExternalLinkIcon;
