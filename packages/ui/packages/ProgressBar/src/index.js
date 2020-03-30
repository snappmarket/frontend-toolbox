import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledProgressBarWrapper, StyledProgressBar } from './styles';

const ProgressBar = props => {
  const { percent, ...rest } = props;
  return (
    <StyledProgressBarWrapper data-testid="progressBarWrapper"  {...rest}>
      <StyledProgressBar data-testid="progressBar" percent={percent} />
    </StyledProgressBarWrapper>
  );
};

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {};
export default ProgressBar;
