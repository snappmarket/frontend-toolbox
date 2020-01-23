import React from 'react';
import PropTypes from 'prop-types';
import { StyledProgressBarWrapper, StyledProgressBar } from './styles';

const ProgressBar = props => {
  const { percent } = props;
  return (
    <StyledProgressBarWrapper>
      <StyledProgressBar percent={percent} />
    </StyledProgressBarWrapper>
  );
};
ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {};
export default ProgressBar;
