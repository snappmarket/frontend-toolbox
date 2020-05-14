import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledProgressBarWrapper, StyledProgressBar } from './styles';

const ProgressBar = ({ percent, color, className }) => (
  <StyledProgressBarWrapper data-testid="progressBarWrapper"  className={className}>
    <StyledProgressBar data-testid="progressBar" percent={percent} color={color}/>
  </StyledProgressBarWrapper>
);

ProgressBar.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  color: PropTypes.oneOf(['gray', 'blue', 'red', 'green', 'yellow', 'orange']),
};

ProgressBar.defaultProps = {
  className: '',
  percent: 0,
  color: 'green',
};

export default ProgressBar;
