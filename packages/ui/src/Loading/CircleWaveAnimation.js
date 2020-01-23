import React from 'react';
import PropTypes from 'prop-types';
import { StyledCircleWave } from './styles';

const CircleWaveAnimation = props => <StyledCircleWave {...props} />;

CircleWaveAnimation.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

CircleWaveAnimation.defaultProps = {
  size: 1.4,
  color: 'green',
};

export default CircleWaveAnimation;
