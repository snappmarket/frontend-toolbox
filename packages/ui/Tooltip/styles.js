import Styled from 'styled-components';

const StyledToolbarWrapper = Styled.span`
  position: relative;
  display: inline-block;
  &:hover {
    > span:last-child {
      opacity: 1;
    }
  }
`;
const StyledToolbar = Styled.span`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.colors.white};
  padding: calc(${props => props.theme.defaultRem} * 0.8) calc(${props =>
  props.theme.defaultRem} * 1.6);
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  opacity: 0;
  transition: all 0.3s ease 0.1s;
  &:after {
    position: absolute;
    border: calc(${props => props.theme.defaultRem}) solid  rgba(0, 0, 0, 0);
    content: "";
  }
  ${props =>
    props.position === 'top' &&
    `
    left: 50%;
    top: calc(${props.theme.defaultRem} * -1);
    transform: translate(-50%, -100%);
    &:after {
      border-top-color: rgba(0, 0, 0, 0.5);
      border-bottom: none;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
  ${props =>
    props.position === 'bottom' &&
    `
    left: 50%;
    bottom: calc(${props.theme.defaultRem} * -1);
    transform: translate(-50%, 100%);
    &:after {
      border-bottom-color:  rgba(0, 0, 0, 0.5);
      border-top: none;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
  ${props =>
    props.position === 'left' &&
    `
    left: calc(${props.theme.defaultRem} * -1);
    top: 50%;
    transform: translate(-100%, -50%);
    &:after {
      border-left-color: rgba(0, 0, 0, 0.5);
      border-right: none;
      top: 50%;
      left: 100%;
      transform: translate(0, -50%);
    }
  `}
  ${props =>
    props.position === 'right' &&
    `
    right: calc(${props.theme.defaultRem} * -1);
    top: 50%;
    transform: translate(100%, -50%);
    &:after {
      border-right-color: rgba(0, 0, 0, 0.5);
      border-left: none;
      top: 50%;
      right: 100%;
      transform: translate(0, -50%);
    }
   `}
`;

export { StyledToolbarWrapper, StyledToolbar };
