import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { basketSelectors, productActions } from 'ducks';

import ProductPrices from './partials/Prices';
import ProductTitle from './partials/Title';
import AddToCard from './partials/AddToCard';
import ProductSchema from './partials/ProductSchema';
import Thumbnail from './partials/Thumbnail';

import { StyledHorizontalProductItem } from './styles';

const HorizontalProduct = ({
  product,
  basketProduct,
  hasAddToCard,
  addToCardSize,
  className,
  additionalComponent,
  openProductModal,
}) => {
  const {
    title,
    max_order_cap: maxOrderCap,
    price,
    discount_Price: discountPrice,
    discount_percent: discountPercent,
    images,
    count = 0,
  } = { ...product, ...basketProduct };

  const { thumb } = images[0] || { thumb: '' };

  return (
    <>
      <ProductSchema product={product} />
      <StyledHorizontalProductItem className={`item-wrapper ${className}`}>
        <Thumbnail
          thumb={thumb}
          maxOrderCap={maxOrderCap}
          onClick={() => openProductModal(product)}
        />

        <ProductTitle
          title={title}
          additionalComponent={additionalComponent}
          onClick={() => openProductModal(product)}
        />

        {hasAddToCard && (!!maxOrderCap || (!maxOrderCap && !!count)) && (
          <AddToCard
            className="add-to-card-wrapper pr-1 text-center no-select"
            product={product}
            size={addToCardSize}
          />
        )}
        <ProductPrices
          discountPercent={discountPercent}
          discountPrice={discountPrice}
          price={price}
        />
      </StyledHorizontalProductItem>
    </>
  );
};

HorizontalProduct.propTypes = {
  product: PropTypes.object.isRequired,
  hasAddToCard: PropTypes.bool,
  addToCardSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  basketProduct: PropTypes.object,
  additionalComponent: PropTypes.node,
  openProductModal: PropTypes.func,
};
HorizontalProduct.defaultProps = {
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
})(HorizontalProduct);
