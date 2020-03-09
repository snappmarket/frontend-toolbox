import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import { Slider } from 'es6-simple-carousel';
import { Slider } from './src/index';
import { StyledSimpleCarousel } from './src/styles';

function SimpleCarousel(props) {
  const { className, children, slideConfig } = props;
  const refrence = useRef();
  useEffect(() => {
    // eslint-disable-next-line no-new
    new Slider({
      slider: refrence.current,
      ...slideConfig,
    });
  }, []);

  return (
    <StyledSimpleCarousel>
      <div className={`slider ${className}`} ref={refrence}>
        <div className="wrapper">
          <div className="slides">{children}</div>
        </div>
      </div>
    </StyledSimpleCarousel>
  );
}
SimpleCarousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  slideConfig: PropTypes.object.isRequired,
};
SimpleCarousel.defaultProps = {
  className: '',
};
export default SimpleCarousel;
