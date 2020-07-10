/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const QuestionMarkFillIcon = ({ className, size }) => (
  <svg
    data-testid="QuestionMarkFillIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <g>
      <g data-name="menu-arrow">
        <rect
          width="24"
          height="24"
          transform="rotate(180 12 12)"
          opacity="0"
        ></rect>
        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
        <circle cx="12" cy="19" r="1"></circle>
      </g>
    </g>
  </svg>
);

QuestionMarkFillIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

QuestionMarkFillIcon.defaultProps = {
  size: 1.5,
};

export default QuestionMarkFillIcon;
