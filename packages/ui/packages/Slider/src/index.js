import React from 'react';
import PropTypes from 'prop-types';
import ReactSlickSlider from 'react-slick';
import 'resources/styles/slider.css';

import { StyledSliderWrapper } from './styles';

const Slider = (props) => {
  const { className, children, ...rest } = props;
  return (
    <StyledSliderWrapper className={className}>
      <ReactSlickSlider {...rest}>{children}</ReactSlickSlider>
    </StyledSliderWrapper>
  );
};

Slider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  arrows: PropTypes.bool,
  dots: PropTypes.bool,
  slidesToShow: PropTypes.number,
  infinite: PropTypes.bool,
  slidesToScroll: PropTypes.number,
  autoplay: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  swipeToSlide: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
  rtl: PropTypes.bool,
};
Slider.defaultProps = {
  className: '',
  arrows: true,
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  pauseOnHover: false,
  swipeToSlide: true,
  autoplaySpeed: 2000,
  rtl: false,
};

export default Slider;
