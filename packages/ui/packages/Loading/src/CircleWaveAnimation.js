import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledCircleWave } from './styles';

const CircleWaveAnimation = props => <StyledCircleWave {...props} />;

CircleWaveAnimation.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.oneOf(['gray', 'blue', 'red', 'green', 'yellow', 'orange']),
};

CircleWaveAnimation.defaultProps = {
  className: '',
  size: 1.4,
  color: 'green',
};

export default CircleWaveAnimation;
