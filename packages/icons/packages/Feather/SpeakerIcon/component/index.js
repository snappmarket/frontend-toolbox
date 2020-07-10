/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const SpeakerIcon = ({ className, size }) => (
  <svg
    data-testid="SpeakerIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <circle cx="12" cy="14" r="4"></circle>
    <line x1="12" y1="6" x2="12.01" y2="6"></line>
  </svg>
);

SpeakerIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SpeakerIcon.defaultProps = {
  size: 1.5,
};

export default SpeakerIcon;
