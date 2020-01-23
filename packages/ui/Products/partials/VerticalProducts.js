import React from 'react';
import PropTypes from 'prop-types';

import {
  VerticalProduct,
  VerticalProductLoading,
} from 'components/Global/Product';

import { StyledProducts, StyledProductWrapper } from '../styles';
import ProductGridLoading from '../loading';

const VerticalProducts = props => {
  const { products, hasAddToCard, addToCardSize, loading, ...rest } = props;

  if (loading) {
    return (
      <ProductGridLoading
        count={props.count}
        LoadingComponent={VerticalProductLoading}
        {...rest}
      />
    );
  }

  return (
    <StyledProducts {...rest}>
      {products.map(product => (
        <StyledProductWrapper key={product.id}>
          <VerticalProduct
            product={product}
            hasAddToCard={hasAddToCard}
            addToCardSize={addToCardSize}
          />
        </StyledProductWrapper>
      ))}
    </StyledProducts>
  );
};

const sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
VerticalProducts.propTypes = {
  products: PropTypes.array,
  hasAddToCard: PropTypes.bool,
  addToCardSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  perRow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      xs: sizePropType,
      sm: sizePropType,
      md: sizePropType,
      lg: sizePropType,
      xl: sizePropType,
    }),
  ]),
  loading: PropTypes.bool,
  className: PropTypes.string,
  count: PropTypes.number,
};
VerticalProducts.defaultProps = {
  products: [],
  hasAddToCard: true,
  addToCardSize: 'md',
  perRow: 5,
  loading: false,
  className: '',
  count: 25,
};

export default VerticalProducts;
