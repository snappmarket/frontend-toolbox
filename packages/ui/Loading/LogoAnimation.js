import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'resources/svg/Logo';
import { StyledLogoAnimation } from './styles';

const LogoAnimation = ({ size, className }) => (
  <StyledLogoAnimation
    className={`align-center justify-center logo-loading-wrapper ${className}`}
    size={size}
  >
    <Logo />
  </StyledLogoAnimation>
);

LogoAnimation.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

LogoAnimation.defaultProps = {
  size: 2.4,
  className: '',
};

export default LogoAnimation;
