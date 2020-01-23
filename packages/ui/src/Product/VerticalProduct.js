import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { basketSelectors, productActions } from 'ducks';

import ProductTitle from 'components/Global/Product/partials/Title';
import ProductPrices from './partials/Prices';
import AddToCard from './partials/AddToCard';
import Thumbnail from './partials/Thumbnail';
import ProductSchema from './partials/ProductSchema';

import { StyledMaterialProductItem } from './styles';

const VerticalProduct = ({
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

  const { thumb } = images[0] || { thumb: null };
  const offerPercent = 20;

  return (
    <>
      <ProductSchema product={product} />
      <StyledMaterialProductItem className={className}>
        <Thumbnail
          discountPercent={discountPercent}
          offerPercent={offerPercent}
          thumb={thumb}
          maxOrderCap={maxOrderCap}
          onClick={() => openProductModal(product)}
        />

        <ProductPrices
          discountPercent={discountPercent}
          discountPrice={discountPrice}
          price={price}
          className="text-gray-normal"
          vertical
        />

        <ProductTitle
          title={title}
          additionalComponent={additionalComponent}
          onClick={() => openProductModal(product)}
        />

        {hasAddToCard && (!!maxOrderCap || (!maxOrderCap && !!count)) && (
          <AddToCard product={product} size={addToCardSize} />
        )}
      </StyledMaterialProductItem>
    </>
  );
};

VerticalProduct.propTypes = {
  product: PropTypes.object.isRequired,
  hasAddToCard: PropTypes.bool,
  addToCardSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
  basketProduct: PropTypes.object,
  additionalComponent: PropTypes.node,
  openProductModal: PropTypes.func,
};
VerticalProduct.defaultProps = {
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
})(VerticalProduct);
