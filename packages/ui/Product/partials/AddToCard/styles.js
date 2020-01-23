import Styled from 'styled-components';

const StyledAddToCardWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  > button {
    min-width: unset;
    width: 100%;
  }
`;
const StyledButtonWrapper = Styled.div`
`;
const StyledBasketCountWrapper = Styled.div`
  padding: 0 calc(${props => props.theme.defaultRem} * 0.5);
  flex-grow: 1;
  text-align: center;
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  > span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.white};
    border: solid calc(${props => props.theme.defaultRem} * 0.1) ${props =>
  props.theme.colors.gray['ultra-light']};
    border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  }
`;

export {
  StyledAddToCardWrapper,
  StyledButtonWrapper,
  StyledBasketCountWrapper,
};
