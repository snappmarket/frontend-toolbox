// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {
  defineForegroundColor,
  getNextProp,
  rem,
  makeRgbaColor,
  color,
} from '@snappmarket/helpers';

export const StyledButton = Styled.button`
  background: none;
  border-radius: ${rem(0.5)};
  font-family: ${props => props.theme.defaultFont};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  overflow: hidden;
  vertical-align: middle;
  letter-spacing: 0;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0 1rem;
  height: ${props => rem(props.height)(props)};
  font-size: ${props => rem(props.fontSize)(props)};
  min-width: ${props => props.fullWidth ? '100%' : `${rem(props.minWidth)(props)}`};
  flex-direction: ${props => props.direction === 'right' ? 'row' : 'row-reverse'};
  svg {
    max-height: ${props => rem(props.height)(props)};
  }
`;

export const StyledLabel = Styled.span`
  font-family: ${props => props.theme.defaultFont};
  border-radius: ${rem(1)};
  font-size: ${rem(1.1)};
  padding: ${rem(0.2, 0.8)};
  background: ${props => makeRgbaColor(0.25, defineForegroundColor(`${color(props.color, 'dark')(props)}`))};
`;

/* eslint-disable indent */
export const StyledPrimaryButton = Styled(StyledButton)`
  background-color: ${props => color(props.color, props.shade)(props)};
  border: none;
  color: ${props => color(defineForegroundColor(`${color(props.color, props.shade)(props)}`))};
  svg {
    fill: ${props => color(defineForegroundColor(`${color(props.color,props.shade)(props)}`))};
  }
  &:hover,
  &:active {
    background-color: ${props =>
    getNextProp(props.theme.colors[props.color], props.shade)};  }
  &:focus,
  &:active {
    box-shadow: ${rem(0,0, 1, -0.1)} ${props => makeRgbaColor(0.5, props.color, props.shade)(props)};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${props => color(props.color, 'ultra-light')(props)};
    color: ${props => color(defineForegroundColor(`${color(props.color, 'dark')}`))};
    svg {
      fill: ${props => color(defineForegroundColor(`${color(props.color, 'dark')}`))};
    }
  }
`;

export const StyledOutlineButton = Styled(StyledPrimaryButton)`
  background: none;
  border: ${rem(0.1)} solid ${props => color(props.color, props.shade)(props)};
  color: ${props => color(props.color, props.shade)(props)};
  svg {
    fill: ${props => color(props.color, props.shade)(props)};
  }
  &:hover,
  &:active {
    color: ${props => color(defineForegroundColor(`${color(props.color, props.shade)(props)}`))};
    svg {
      fill: ${props => color(defineForegroundColor(`${color(props.color, props.shade)(props)}`))};
    }
  }
  &:disabled {
    background: none;
    border-color: ${color('gray', 'light')};
    color: ${color('gray', 'light')};
  }
`;
/* eslint-enable indent */

export const StyledLinkButton = Styled(StyledOutlineButton)`
  &,
  &:hover,
  &:active,
  &:focus {
    border-color: transparent;
    background: none;
    box-shadow: unset;
    color: ${props => color(props.color, props.shade)(props)};
    svg {
      fill: ${props => color(props.color, props.shade)(props)};
    }
  }
  &:disabled {
    color: ${color('gray', 'light')};
    border: none;
    svg {
      fill: ${color('gray', 'light')};
    }
  }
`;
