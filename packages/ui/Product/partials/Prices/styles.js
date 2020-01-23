import Styled from 'styled-components';

export const StyledPriceWrapper = Styled.div`
  text-align: left;
  &.price-wrapper {
    width: ${props => (props.vertical ? '100%' : '24%')};
  }
  small {
    font-size: calc(${props => props.theme.defaultRem} * 1.2);
    font-weight: 300;
    text-decoration: line-through;
  }
  b {
    font-size: calc(${props => props.theme.defaultRem} * 1.6);
    font-weight: 500;
  }
`;
