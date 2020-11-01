import * as React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Slider } from './core/index';
import { StyledSimpleCarousel } from './core/styles';

const SimpleCarousel = props => {
  const {
    className,
    children,
    slideConfig,
    showingSlide,
    refresh,
    nextArrow,
    prevArrow,
    flexScroll,
  } = props;
  const sliderRed = useRef(null);
  const { customArrow } = slideConfig;
  let newSlider = null;

  useEffect(() => {
    if (children && children.length) {
      newSlider = new Slider({
        slider: sliderRed.current,
        ...slideConfig,
      });
    }
  }, [children.length]);

  useEffect(() => {
    if (typeof showingSlide === 'number' || showingSlide >= 0) {
      newSlider = new Slider({
        slider: sliderRed.current,
        ...slideConfig,
      });
      goToShowingSlide(showingSlide);
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

  const goToShowingSlide = index => {
    newSlider.goToShowingSlide(index);
  };

  const onRefresh = refreshFlag => {
    newSlider.refresh(refreshFlag);
  };

  return (
    <>
      {children && children.length && (
        <StyledSimpleCarousel>
          <div
            data-testid="carousel"
            className={`slider ${className} ${
              flexScroll ? 'flex-scroll-on' : 'flex-scroll-off'
            }`}
            ref={sliderRed}
          >
            <div className="wrapper">
              <div className="slides">{children}</div>
            </div>
            {customArrow && (
              <>
                {!!nextArrow && (
                  <span className="control next">{nextArrow}</span>
                )}
                {!!prevArrow && (
                  <span className="control prev">{prevArrow}</span>
                )}
              </>
            )}
          </div>
        </StyledSimpleCarousel>
      )}
    </>
  );
};
SimpleCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  slideConfig: PropTypes.object.isRequired,
  showingSlide: PropTypes.number,
  refresh: PropTypes.bool,
  nextArrow: PropTypes.node,
  prevArrow: PropTypes.node,
  flexScroll: PropTypes.node,
};
SimpleCarousel.defaultProps = {
  className: '',
  flexScroll: false,
};
export default SimpleCarousel;
