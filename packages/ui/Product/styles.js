import Styled from 'styled-components';

export const StyledProductItem = Styled.div`
  cursor: pointer;
  .add-to-card:not(.added-to-card) {
    opacity: 0;
    transition: all 0.5s ease 0.1s;
  }
  &:hover {
    .add-to-card:not(.added-to-card) {
      opacity: 1;
    }
  }
`;
export const StyledHorizontalProductItem = Styled(StyledProductItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > * {
    &.thumbnail-wrapper {
      width: calc(${props => props.theme.defaultRem} * 10);
    }
    &.title-wrapper {
      flex-grow: 2;
    }
    &.add-to-card-wrapper {
      width: 25%;
      max-width: calc(${props => props.theme.defaultRem} * 15);
    }
  }
`;

export const StyledMinimalProductItem = Styled(StyledProductItem)`
  position: relative;
  .thumbnail-wrapper {
    border: solid calc(${props => props.theme.defaultRem} * 0.1) ${props =>
  props.theme.colors.gray['ultra-light']};
    border-radius: calc(${props => props.theme.defaultRem} * 0.5)
  }
`;
export const StyledCountWrapper = Styled.div`
  width: calc(${props => props.theme.defaultRem} * 2.5);
  height: calc(${props => props.theme.defaultRem} * 2.5);
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 calc(${props =>
    props.theme.defaultRem} * 0.5) 0 rgba(0, 0, 0, 0.16);
  position: absolute;
  top: 0;
  right: 0;
  z-index:1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  transform: translate(50%, -50%);
`;

export const StyledMaterialProductItem = Styled(StyledProductItem)``;
