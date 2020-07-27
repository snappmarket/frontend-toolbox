import * as React from 'react';
import PropTypes from 'prop-types';

import { SnappMarketLogo } from '@snappmarket/icons/sprite';
import { StyledLogoAnimation } from './styles';

const LogoAnimation = ({ size, className, animate, logoIcon }) => (
  <StyledLogoAnimation
    data-testid="logoAnimation"
    className={`align-center justify-center logo-loading-wrapper ${className} ${animate && 'animating'}`}
    size={size}
  >
    {logoIcon || <SnappMarketLogo />}
  </StyledLogoAnimation>
);

LogoAnimation.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  animate: PropTypes.bool,
  logoIcon: PropTypes.node,
};

LogoAnimation.defaultProps = {
  size: 2.4,
  className: '',
  animate: true,
};

export default LogoAnimation;
