/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const VoicemailIcon = ({ className, size }) => (
  <svg
    data-testid="VoicemailIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <circle cx="5.5" cy="11.5" r="4.5"></circle>
    <circle cx="18.5" cy="11.5" r="4.5"></circle>
    <line x1="5.5" y1="16" x2="18.5" y2="16"></line>
  </svg>
);

VoicemailIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

VoicemailIcon.defaultProps = {
  size: 1.5,
};

export default VoicemailIcon;
