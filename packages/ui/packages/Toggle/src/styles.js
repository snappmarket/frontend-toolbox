// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, color} from "@snappmarket/helpers"

export const StyledToggleWrapper = Styled.button`
  width: ${props =>  rem(props.size * 2.2)(props)};
  border-radius: ${props => rem(props.size)(props)};
  display: flex;
  padding: 0;
  position: relative;
  outline: none;
  cursor: pointer;
  background-color: ${color('gray', 'light')};
  justify-content: flex-end;
  border: solid ${rem(0.1)} ${color('gray', 'light')};
  line-height: 0;
  &.selected {
    background-color: ${props => color(props.status, 'light')(props)};
    color: ${props => color(props.status, 'light')(props)};
    justify-content: start;
    border-color: ${props => color(props.status, 'light')(props)};
  }
  &.disabled {
    filter: grayscale(1);
    cursor: not-allowed;
  }
  > span {
    width: ${props => rem(props.size)(props)};
    height: ${props => rem(props.size)(props)};
    background-color: ${color('white')};
    border: inherit;
    display: block;
    border-radius: 50%;
    transition: inherit;
  }
`;
