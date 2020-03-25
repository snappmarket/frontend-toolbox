import * as React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Slider } from './core/index';
import { StyledSimpleCarousel } from './core/styles';

const SimpleCarousel = props => {
  const { className, children, slideConfig, showingSlide, refresh } = props;
  const sliderRed = useRef(null);
  let newSlider = null;

  useEffect(() => {
    newSlider = new Slider({
      slider: sliderRed.current,
      ...slideConfig,
    });
  }, []);

  useEffect(() => {
    if (typeof showingSlide === 'number' || showingSlide >= 0) {
      newSlider = new Slider({
        slider: sliderRed.current,
        ...slideConfig,
      });
      goTo(showingSlide);
    }
  }, [showingSlide]);

  useEffect(() => {
    if (refresh) {
      newSlider = new Slider({
        slider: sliderRed.current,
        ...slideConfig,
      });
      onRefresh(refresh);
    }
  }, [refresh]);

  const goTo = index => {
    newSlider.goTo(index);
  };

  const onRefresh = refreshFlag => {
    newSlider.refresh(refreshFlag);
  };

  return (
    <StyledSimpleCarousel>
      <div className={`slider ${className}`} ref={sliderRed}>
        <div className="wrapper">
          <div className="slides">{children}</div>
        </div>
      </div>
    </StyledSimpleCarousel>
  );
};
SimpleCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  slideConfig: PropTypes.object.isRequired,
  showingSlide: PropTypes.number,
  refresh: PropTypes.bool,
};
SimpleCarousel.defaultProps = {
  className: '',
};
export default SimpleCarousel;
