/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const NoteIcon = ({ className, size }) => (
  <svg
    data-testid="NoteIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M22 10l-6-6H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99l16-.01c1.1 0 2-.89 2-1.99v-8zm-7-4.5l5.5 5.5H15V5.5z"></path>
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
