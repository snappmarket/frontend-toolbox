/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CommentIcon = ({ className, size }) => (
  <svg
    data-testid="CommentIcon"
    viewBox="0 0 16 16"
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
      d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"
    ></path>
  </svg>
);

CommentIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CommentIcon.defaultProps = {
  size: 1.5,
};

export default CommentIcon;
