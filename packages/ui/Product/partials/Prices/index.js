import React from 'react';
import PropTypes from 'prop-types';

import Label from 'components/Global/Label';
import { currencyPrice, persianNumber } from 'constants/Helpers/numberHelpers';
import { StyledPriceWrapper } from './styles';

const ProductPrices = props => {
  const {
    discountPercent,
    discountPrice,
    price,
    className,
    vertical,
    ...rest
  } = props;
  return (
    <StyledPriceWrapper
      className={`price-wrapper pr-1 no-select ${className}`}
      vertical={vertical}
      {...rest}
    >
      {!!discountPercent && (
        <div className="price-with-discount-wrapper mb-1">
          <small>{currencyPrice(price)}</small>
          <Label
            className="mr-1 pt-0 pb-0"
            type="primary"
            radius={1.2}
            color="red"
            fontSize={1.3}
          >
            {persianNumber(discountPercent)}٪
          </Label>
        </div>
      )}
      <div className="primary-price">
        <strong>{currencyPrice(discountPrice || price)}</strong>
      </div>
    </StyledPriceWrapper>
  );
};

ProductPrices.propTypes = {
  className: PropTypes.string,
  discountPercent: PropTypes.number,
  discountPrice: PropTypes.number,
  price: PropTypes.number,
  vertical: PropTypes.bool,
};
ProductPrices.defaultProps = {
  vertical: false,
  className: '',
  discountPercent: 0,
  discountPrice: 0,
  price: 0,
};

export default ProductPrices;
