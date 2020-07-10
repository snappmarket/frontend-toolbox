/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const CalendarViewDay = ({ className, size }) => (
  <svg
    data-testid="CalendarViewDay"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"></path>
  </svg>
);

CalendarViewDay.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CalendarViewDay.defaultProps = {
  size: 1.5,
};

export default CalendarViewDay;
