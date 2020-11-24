import React from 'react';
import PropTypes from 'prop-types';
import { StyleLoadingBarWrapper, StyledLoadingLine } from './styles';

const LoadingBar = ({ height, rainbow, opacity, duration }) => (
  <StyleLoadingBarWrapper className="loading-line-wrapper" height={height}>
    <StyledLoadingLine
      className="loading-line"
      rainbow={rainbow}
      duration={duration}
      opacity={opacity}
    >
      <div
        className={`loading-line-inner loading-line-inner-1 ${
          rainbow ? 'rainbow' : ''
        }`}
      />
      <div
        className={`loading-line-inner loading-line-inner-2 ${
          rainbow ? 'rainbow' : ''
        }`}
      />
    </StyledLoadingLine>
  </StyleLoadingBarWrapper>
);

LoadingBar.propTypes = {
  height: PropTypes.number,
  rainbow: PropTypes.bool,
  opacity: PropTypes.number,
  duration: PropTypes.number,
};

LoadingBar.defaultProps = {
  height: 0.8,
  opacity: 0.8,
  rainbow: true,
  duration: 1,
};

export default LoadingBar;
