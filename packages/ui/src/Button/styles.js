import styled from 'styled-components';
import {
  defineForegroundColor,
  makeRgba,
  getNextShade
} from '../../../constants/Helpers/themeHelpers';

export const StyledButton = styled.button`
  background: none;
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
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
  padding: 0 1rem;
  height: ${props => `calc(${props.height} * ${props.theme.defaultRem})`};
  font-size: ${props => `calc(${props.fontSize} * ${props.theme.defaultRem})`};
  min-width: ${props =>
    props.fullWidth
      ? '100%'
      : `calc(${props.minWidth} * ${props.theme.defaultRem})`};
  flex-direction: ${props =>
    props.direction === 'right' ? 'row' : 'row-reverse'};
  border: calc(${props => props.theme.defaultRem} * 0.1) solid transparent;
  svg {
    max-height: ${props => `calc(${props.height} * ${props.theme.defaultRem})`};
  }
`;

export const StyledLabel = styled.span`
  font-family: ${props => props.theme.defaultFont};
  border-radius: 50%;
  font-size: calc(${props => props.theme.defaultRem} * 1.1);
  padding: ${props =>
    `calc(${props.theme.defaultRem} * 0.2) calc(${props.theme.defaultRem} * 0.8)`};
  background: ${props =>
    makeRgba(
      0.25,
      props.theme.colors[
        defineForegroundColor(props.theme.colors[props.color].dark)
      ]
    )};
`;

/* eslint-disable indent */
export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors[props.color][props.shade]};
  border-color: ${props => props.theme.colors[props.color][props.shade]};
  color: ${props =>
    props.theme.colors[
      defineForegroundColor(props.theme.colors[props.color][props.shade])
    ]};
  &:hover,
  &:active {
    background-color: ${props =>
      getNextShade(props.theme.colors[props.color], props.shade)};
  }
  &:focus,
  &:active {
    box-shadow: 0 0 calc(${props => props.theme.defaultRem} * 1)
      calc(${props => props.theme.defaultRem} * -0.1)
      ${props => makeRgba(0.5, props.theme.colors[props.color][props.shade])};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${props =>
      props.theme.colors[props.color]['ultra-light']};
    border-color: ${props => props.theme.colors[props.color]['ultra-light']};
    color: ${props =>
      props.theme.colors[
        defineForegroundColor(props.theme.colors[props.color].dark)
      ]};
  }
`;

export const StyledOutlineButton = styled(StyledPrimaryButton)`
  background: none;
  color: ${props => props.theme.colors[props.color][props.shade]};
  &:hover,
  &:active {
    color: ${props =>
      props.theme.colors[
        defineForegroundColor(props.theme.colors[props.color][props.shade])
      ]};
  }
  &:disabled {
    background: none;
    border-color: ${props => props.theme.colors.gray.light};
    color: ${props => props.theme.colors.gray.light};
  }
`;
/* eslint-enable indent */

export const StyledLinkButton = styled(StyledOutlineButton)`
  &,
  &:hover,
  &:active,
  &:focus {
    border-color: transparent;
    background: none;
    box-shadow: unset;
    color: ${props => props.theme.colors[props.color][props.shade]};
  }
  &:disabled {
    color: ${props => props.theme.colors.gray.light};
    border: none;
  }
`;
