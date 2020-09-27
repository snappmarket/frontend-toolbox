// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { defineForegroundColor, rem, color } from '@snappmarket/helpers';

export const StyledLabel = Styled.label`
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: ${rem(0.7, 0.7, 0.6, 0.7)};
  background: ${props => color(props.color, 'ultra-light')(props)};
  font-family: ${props => props.theme.defaultFont};
  color: ${props => color(props.color, 'normal')(props)};
  line-height: ${rem(1.5)};
  vertical-align: middle;
  border: ${props => props.hasBorder ? `${rem(0.1)(props)} solid transparent` : 'none'};
  font-size: ${props => rem(props.fontSize)(props)};
  border-radius: ${props => typeof props.radius === 'number' ? rem(props.radius)(props) : props.radius};
`;

export const StyledPrimaryLabel = Styled(StyledLabel)`
  background-color: ${props => color(props.color, 'normal')(props)};
  border-color: ${props => color(props.color, 'normal')(props)};
  color: ${props => color(defineForegroundColor(`${color(props.color, 'dark')(props)}`))};
`;

export const StyledMaterialLabel = Styled(StyledLabel)`
  background-color: ${props => color(props.color, 'bright')(props)};
  border-color: ${props => color(props.color, 'bright')(props)};
  color: ${props => color(props.color, 'normal')(props)};
`;

export const StyledOutlineLabel = Styled(StyledLabel)`
  background-color: transparent;
  border-color: ${props => color(props.color, 'normal')(props)};
  color: ${props => color(props.color, 'normal')(props)};
`;

export const StyledQuietLabel = Styled(StyledLabel)`
  background: none;
  border-color: transparent;
  color: ${props => color(props.color, 'normal')(props)};
`;
