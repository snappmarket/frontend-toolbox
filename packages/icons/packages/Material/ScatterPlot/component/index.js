/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const ScatterPlot = ({ className, size }) => (
  <svg
    data-testid="ScatterPlot"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <React.Fragment>
      <circle cx="7" cy="14" r="3"></circle>
      <circle cx="11" cy="6" r="3"></circle>
      <circle cx="16.6" cy="17.6" r="3"></circle>
    </React.Fragment>
    , 'ScatterPlot',
  </svg>
);

ScatterPlot.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ScatterPlot.defaultProps = {
  size: 1.5,
};

export default ScatterPlot;
