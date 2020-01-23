import React from 'react';
import PropTypes from 'prop-types';

import {
  HorizontalProduct,
  HorizontalProductLoading,
} from 'components/Global/Product';
import Label from 'components/Global/Label';

import { StyledProducts, StyledProductWrapper } from '../styles';
import ProductGridLoading from '../loading';

const BasketProducts = props => {
  const {
    products,
    type,
    hasAddToCard,
    addToCardSize,
    loading,
    count,
    ...rest
  } = props;

  if (loading) {
    return (
      <ProductGridLoading
        count={count}
        LoadingComponent={HorizontalProductLoading}
        {...rest}
      />
    );
  }

  return (
    <StyledProducts {...rest}>
      {products.map(product => (
        <StyledProductWrapper key={product.id}>
          <HorizontalProduct
            product={product}
            hasAddToCard={hasAddToCard}
            addToCardSize={addToCardSize}
            className={!product.max_order_cap ? 'no-price' : ''}
            additionalComponent={
              product.messages &&
              !!product.messages.length && (
                <Label color={product.messages[0].type} type="material">
                  {product.messages[0].message}
                </Label>
              )
            }
          />
          {/* {!product.max_order_cap && (
              <StyledSelectSimilarProductWrapper>
                <Button
                  type="primary"
                  size="sm"
                  icon="loop"
                  title={generalMessages.relatedProducts}
                />
              </StyledSelectSimilarProductWrapper>
            )} */}
        </StyledProductWrapper>
      ))}
    </StyledProducts>
  );
};

const sizePropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
BasketProducts.propTypes = {
  products: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['material', 'minimal', 'horizontal']),
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

BasketProducts.defaultProps = {
  hasAddToCard: true,
  addToCardSize: 'md',
  perRow: 1,
  loading: false,
  className: '',
  count: 25,
};

export default BasketProducts;
