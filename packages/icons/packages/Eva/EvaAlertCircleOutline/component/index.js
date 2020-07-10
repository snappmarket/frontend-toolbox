/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const EvaAlertCircleOutline = ({ className, size }) => (
  <svg
    data-testid="EvaAlertCircleOutline"
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
      <g data-name="alert-circle">
        <rect width="24" height="24" opacity="0"></rect>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
        <circle cx="12" cy="16" r="1"></circle>
        <path d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"></path>
      </g>
    </g>
  </svg>
);

EvaAlertCircleOutline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaAlertCircleOutline.defaultProps = {
  size: 1.5,
};

export default EvaAlertCircleOutline;
