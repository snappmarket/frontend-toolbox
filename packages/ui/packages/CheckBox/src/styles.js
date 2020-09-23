// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { rem, color } from '@snappmarket/helpers'

export const StyledCheckboxWrapper = Styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => rem(props.size)(props)};
  height: ${props => rem(props.size)(props)};
  padding: ${rem(0.3)};
  color: ${color('white')};
  border-radius: ${rem(0.2)};
  border-width: ${rem(0.1)};
  border-style: solid;
  transition: all 0.5s ease 0s;
  &.has-border.not-selected {
    border: solid ${rem(0.1)} ${color('gray','light')};
  }
  &.not-selected {
    background-color: transparent;
  }
  &.selected {
    background-color: ${props => color(props.status, 'light')(props)};
    border-color: ${props => color(props.status, 'light')(props)}
  }
  &:hover {
    border-color: ${props => color(props.status, 'light')};
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
