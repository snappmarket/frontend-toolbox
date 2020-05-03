import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledProgressBarWrapper, StyledProgressBar } from './styles';

const ProgressBar = props => {
  const { percent, className } = props;
  return (
    <StyledProgressBarWrapper data-testid="progressBarWrapper"  className={className}>
      <StyledProgressBar data-testid="progressBar" percent={percent} />
    </StyledProgressBarWrapper>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  className: '',
  percent: 0,
};

export default ProgressBar;
