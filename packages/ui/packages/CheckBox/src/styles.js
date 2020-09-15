// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { rem, color } from '@snappmarket/helpers'

export const StyledCheckboxWrapper = Styled.button`
  background-color: ${props => !props.selected ? 'transparent' : color(props.status, 'light')(props)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => rem(props.size)(props)};
  height: ${props => rem(props.size)(props)};
  padding: ${rem(0.3)};
  border: ${props => props.border && !props.selected ? `solid ${rem(0.1)(props)} ${color('gray','light')(props)}` : 'none'};
  color: ${color('white')};
  border-radius: ${rem(0.2)};
  transition: all 0.5s ease 0s;
  &:hover {
      border-color: ${props => color(props.status, 'light')(color)};
  }
  &:disabled {
      background-color: ${color('gray', 'ultra-light')};
    border-color: ${color('gray', 'ultra-light')};
  }
  &:active {
    svg {
      fill: ${color('white')};
    }
  }
  svg {
    width: ${rem(1)} !important;
    height:${rem(1)} !important;
    fill: ${color('white')};
  }
`;
