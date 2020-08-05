import * as React from 'react';
import PropTypes from 'prop-types';

import { SnappMarketLogo } from '@iconbox/snappmarket';
import { StyledLogoAnimation } from './styles';

const LogoAnimation = ({ size, className, animate, logoIcon }) => (
  <StyledLogoAnimation
    data-testid="logoAnimation"
    className={`align-center justify-center logo-loading-wrapper ${className} ${animate ? 'animating' : ''}`}
    size={size}
  >
    {logoIcon || <SnappMarketLogo />}
  </StyledLogoAnimation>
);

LogoAnimation.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  animate: PropTypes.bool,
  logoIcon: PropTypes.node,
};

LogoAnimation.defaultProps = {
  className: '',
  size: 2.4,
  animate: true,
};

export default LogoAnimation;
