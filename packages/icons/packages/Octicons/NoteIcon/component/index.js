/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const NoteIcon = ({ className, size }) => (
  <svg
    data-testid="NoteIcon"
    viewBox="0 0 14 16"
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
      d="M3 10h4V9H3v1zm0-2h6V7H3v1zm0-2h8V5H3v1zm10 6H1V3h12v9zM1 2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H1z"
    ></path>
  </svg>
);

NoteIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

NoteIcon.defaultProps = {
  size: 1.5,
};

export default NoteIcon;
