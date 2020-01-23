import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { basketActions, basketSelectors } from 'ducks';
import Button from 'components/Global/Button';
import generalMessages from 'constants/Messages/general.messages';
import { persianNumber } from 'constants/Helpers/numberHelpers';

import {
  StyledAddToCardWrapper,
  StyledButtonWrapper,
  StyledBasketCountWrapper,
} from './styles';

const AddToCard = props => {
  const {
    product,
    basketProduct,
    size,
    className,
    addToBasket,
    removeFromBasket,
  } = props;

  const { count = 0, max_order_cap: maxOrderCap } = {
    ...product,
    ...basketProduct,
  };

  const handleAddToBasket = () => {
    if (count < maxOrderCap) {
      addToBasket(product);
    }
  };
  const handleRemoveFromBasket = () => {
    if (count) {
      removeFromBasket(product);
    }
  };

  return (
    <StyledAddToCardWrapper
      className={`add-to-card ${count ? 'added-to-card' : ''} ${className}`}
    >
      {!count ? (
        <Button
          modifier="primary"
          size={size}
          color="green"
          title={generalMessages.addToCard}
          onClick={handleAddToBasket}
          disabled={!maxOrderCap}
        />
      ) : (
        <>
          <StyledButtonWrapper>
            <Button
              icon="plus"
              modifier="primary"
              size={size}
              color="green"
              onClick={handleAddToBasket}
              disabled={count >= maxOrderCap}
              className="p-0"
            />
          </StyledButtonWrapper>
          <StyledBasketCountWrapper>
            <span>{persianNumber(count)}</span>
          </StyledBasketCountWrapper>
          <StyledButtonWrapper>
            <Button
              icon={count > 1 ? 'minus' : 'trash-o'}
              modifier="outline"
              size={size}
              color="green"
              onClick={handleRemoveFromBasket}
              disabled={!count}
              className="p-0"
            />
          </StyledButtonWrapper>
        </>
      )}
    </StyledAddToCardWrapper>
  );
};

AddToCard.propTypes = {
  product: PropTypes.object.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  // redux
  basketProduct: PropTypes.object,
  addToBasket: PropTypes.func,
  removeFromBasket: PropTypes.func,
};

AddToCard.defaultProps = {
  className: '',
  size: 'md',
};
const mapStateToProps = (state, props) => ({
  basketProduct: basketSelectors.getBasketProduct(props.product.id)(state),
});
export default connect(mapStateToProps, {
  addToBasket: basketActions.addToBasket,
  removeFromBasket: basketActions.removeFromBasket,
})(AddToCard);
