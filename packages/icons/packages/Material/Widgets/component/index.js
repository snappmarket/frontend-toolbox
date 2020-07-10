/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const Widgets = ({ className, size }) => (
  <svg
    data-testid="Widgets"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"></path>
  </svg>
);

Widgets.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Widgets.defaultProps = {
  size: 1.5,
};

export default Widgets;
