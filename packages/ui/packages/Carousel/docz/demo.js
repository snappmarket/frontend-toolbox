import * as React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Slider } from '../src/core/index';
import { StyledSimpleCarousel } from '../src/core/styles';
import { StyledCarouselDemo } from '../src/core/styles.demo';

const SimpleCarouselDemo = props => {
  const {
    className,
    children,
    slideConfig,
    showingSlide,
    refresh,
    nextArrow,
    prevArrow,
  } = props;
  const sliderRed = useRef(null);
  const { customArrow } = slideConfig;
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
    <StyledCarouselDemo>
      <StyledSimpleCarousel>
        <div
          data-testid="carousel"
          className={`slider ${className}`}
          ref={sliderRed}
        >
          <div className="wrapper">
            <div className="slides">{children}</div>
          </div>
          {customArrow && (
            <>
              {!!nextArrow && <span className="control next">{nextArrow}</span>}
              {!!prevArrow && <span className="control prev">{prevArrow}</span>}
            </>
          )}
        </div>
      </StyledSimpleCarousel>
    </StyledCarouselDemo>
  );
};
SimpleCarouselDemo.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  slideConfig: PropTypes.object.isRequired,
  showingSlide: PropTypes.number,
  refresh: PropTypes.bool,
  nextArrow: PropTypes.node,
  prevArrow: PropTypes.node,
};
SimpleCarouselDemo.defaultProps = {
  className: '',
};
export default SimpleCarouselDemo;
