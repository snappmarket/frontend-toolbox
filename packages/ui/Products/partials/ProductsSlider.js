import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from '../../Slider';
import generalMessages from '../../../../constants/Messages/general.messages';

import {
  StyledProductSliderItem,
  StyledProductSliderTitle,
  StyledProductSliderWrapper,
} from '../styles';

const ProductsSlider = props => {
  const { products, title, link, hasAddToCard, addToCardSize, ...rest } = props;

  if (!products.length) {
    return null;
  }

  return (
    <StyledProductSliderWrapper>
      <StyledProductSliderTitle>
        <span>{title}</span>
        {!!link && <Link to={link}>{generalMessages.seeMoreProduct}</Link>}
      </StyledProductSliderTitle>
      <Slider {...rest}>
        {products.map(item => (
          <StyledProductSliderItem
            key={item.id}
            product={item}
            hasAddToCard={hasAddToCard}
            addToCardSize={addToCardSize}
          />
        ))}
      </Slider>
    </StyledProductSliderWrapper>
  );
};

ProductsSlider.propTypes = {
  products: PropTypes.array.isRequired,
  hasAddToCard: PropTypes.bool,
  addToCardSize: PropTypes.oneOf(['sx', 'sm', 'md', 'lg', 'xl']),
  title: PropTypes.string,
  link: PropTypes.string,
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

ProductsSlider.defaultProps = {
  hasAddToCard: true,
  addToCardSize: 'md',
  title: '',
  link: '',
  arrows: true,
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  pauseOnHover: false,
  swipeToSlide: true,
  autoplaySpeed: 2000,
  rtl: true,
};

export default ProductsSlider;
