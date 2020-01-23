import React from 'react';
import PropTypes from 'prop-types';

import {
  MinimalProduct,
  MinimalProductLoading,
} from 'components/Global/Product';

import ProductGridLoading from '../loading';
import { StyledProducts, StyledProductWrapper } from '../styles';

const MinimalProducts = props => {
  const { products, hasAddToCard, addToCardSize, loading, ...rest } = props;

  if (loading) {
    return (
      <ProductGridLoading
        count={props.count}
        LoadingComponent={MinimalProductLoading}
        {...rest}
      />
    );
  }

  return (
    <StyledProducts {...rest}>
      {products.map(product => (
        <StyledProductWrapper key={product.id}>
          <MinimalProduct
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
MinimalProducts.propTypes = {
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
MinimalProducts.defaultProps = {
  products: [],
  hasAddToCard: true,
  addToCardSize: 'md',
  perRow: 5,
  loading: false,
  className: '',
  count: 25,
};

export default MinimalProducts;
