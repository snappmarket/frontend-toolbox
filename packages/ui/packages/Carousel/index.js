import * as React from 'react'; 
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Slider } from './src/index';
import { StyledSimpleCarousel } from './src/styles';

const SimpleCarousel = (props) => {
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
