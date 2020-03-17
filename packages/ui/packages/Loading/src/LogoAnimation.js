import * as React from 'react';
import PropTypes from 'prop-types';

import { SnappMarketLogo } from '@snappmarket/icons';
import { StyledLogoAnimation } from './styles';

const LogoAnimation = ({ size, className }) => (
  <StyledLogoAnimation
    data-testid="logoAnimation"
    className={`align-center justify-center logo-loading-wrapper ${className}`}
    size={size}
  >
    <SnappMarketLogo />
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
