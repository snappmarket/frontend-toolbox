import Styled from 'styled-components';

export const StyledThumbnailWrapper = Styled.div`
  position: relative;
  img {
    max-width: 100%;
    ${props => (!props.maxOrderCap ? `opacity: 0.4;` : '')}
  }
`;

export const StyledOutOfStockBadge = Styled.div`
    position: absolute;
    right: calc(${props => props.theme.defaultRem} * 1.5);
    top: 50%;
    transform: translateY(-50%);
    box-shadow: 0 0 calc(${props => props.theme.defaultRem}) 0 ${props =>
  props.theme.colors.gray.light};
    padding: calc(${props => props.theme.defaultRem} * 0.5) calc(${props =>
  props.theme.defaultRem} * 2);
    background-color: ${props => props.theme.colors.white};
    border-radius: calc(${props => props.theme.defaultRem} * 2);
`;

export const StyledOfferPercentWrapper = Styled.div``;
