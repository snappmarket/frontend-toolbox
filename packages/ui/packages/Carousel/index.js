import * as React from 'react';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Slider } from './src/index';
import { StyledSimpleCarousel } from './src/styles';

const SimpleCarousel = (props) => {
  const { className, children, slideConfig } = props;
  const sliderRed = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-new
    new Slider({
      slider: sliderRed.current,
      ...slideConfig,
    });
  }, []);

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
};
SimpleCarousel.defaultProps = {
  className: '',
};
export default SimpleCarousel;
