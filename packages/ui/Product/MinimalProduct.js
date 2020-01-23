import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { basketSelectors, productActions } from 'ducks';
import { persianNumber } from 'constants/Helpers/numberHelpers';

import AddToCard from './partials/AddToCard';
import ProductSchema from './partials/ProductSchema';
import Thumbnail from './partials/Thumbnail';
import ProductTitle from './partials/Title';

import { StyledMinimalProductItem, StyledCountWrapper } from './styles';

const MinimalProduct = ({
  product,
  basketProduct,
  hasAddToCard,
  addToCardSize,
  className,
  additionalComponent,
  openProductModal,
}) => {
  const { title, max_order_cap: maxOrderCap, images, count = 0 } = {
    ...product,
    ...basketProduct,
  };
  const { thumb } = images[0] || { thumb: '' };
  return (
    <>
      <ProductSchema product={product} />
      <StyledMinimalProductItem className={className}>
        {!!count && (
          <StyledCountWrapper>{persianNumber(count)}</StyledCountWrapper>
        )}
        <Thumbnail
          thumb={thumb}
          maxOrderCap={maxOrderCap}
          onClick={() => openProductModal(product)}
        />

        <ProductTitle
          title={title}
          additionalComponent={additionalComponent}
          minimal
          onClick={() => openProductModal(product)}
        />

        {hasAddToCard && (!!maxOrderCap || (!maxOrderCap && !!count)) && (
          <AddToCard product={product} size={addToCardSize} />
        )}
      </StyledMinimalProductItem>
    </>
  );
};

MinimalProduct.propTypes = {
  // props
  product: PropTypes.object.isRequired,
  hasAddToCard: PropTypes.bool,
  addToCardSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  additionalComponent: PropTypes.node,
  // redux
  basketProduct: PropTypes.object,
  openProductModal: PropTypes.func,
};
MinimalProduct.defaultProps = {
  hasAddToCard: true,
  addToCardSize: 'md',
  className: '',
  basketProduct: {},
  additionalComponent: null,
};
const mapStateToProps = (state, props) => ({
  basketProduct: basketSelectors.getBasketProduct(props.product.id)(state),
});
export default connect(mapStateToProps, {
  openProductModal: productActions.openProductModal,
})(MinimalProduct);
