import React from 'react';
import PropTypes from 'prop-types';
import Image from 'components/Global/Image';
import generalMessages from 'constants/Messages/general.messages';
import {
  StyledOutOfStockBadge,
  StyledThumbnailWrapper,
  StyledOfferPercentWrapper,
} from './styles';

const Thumbnail = ({
  maxOrderCap,
  thumb,
  showDiscount,
  discountPercent,
  offerPercent,
  ...rest
}) => (
  <StyledThumbnailWrapper
    className="thumbnail-wrapper align-center justify-center"
    maxOrderCap={maxOrderCap}
    {...rest}
  >
    <Image src={thumb} />
    {showDiscount && discountPercent >= offerPercent && (
      <StyledOfferPercentWrapper>
        {generalMessages.specialOffer}
      </StyledOfferPercentWrapper>
    )}
    {!maxOrderCap && (
      <StyledOutOfStockBadge>
        {generalMessages.outOfStock}
      </StyledOutOfStockBadge>
    )}
  </StyledThumbnailWrapper>
);

Thumbnail.propTypes = {
  thumb: PropTypes.string,
  discountPercent: PropTypes.number,
  offerPercent: PropTypes.number,
  maxOrderCap: PropTypes.number,
  showDiscount: PropTypes.bool,
};

Thumbnail.defaultProps = {
  showDiscount: false,
  discountPercent: 0,
  offerPercent: 0,
};

export default Thumbnail;
