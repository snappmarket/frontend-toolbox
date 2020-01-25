import styled from 'styled-components';
import { defineForegroundColor } from '@snappmarket/helpers';

const StyledLabel = styled.label`
  text-align: center;
  display: inline-block;
  margin: 0;
  padding: ${(props) => `calc(${props.theme.defaultRem} * 0.7) calc(${props.theme.defaultRem} * 0.7) calc(${props.theme.defaultRem} * 0.6) calc(${props.theme.defaultRem} * 0.7)`};
  background: ${(props) => props.theme.colors[props.color]['ultra-light']};
  font-family: ${(props) => props.theme.defaultFont};
  color: ${(props) => props.theme.colors[props.color].normal};
  line-height: calc(${(props) => props.theme.defaultRem} * 1.5);
  vertical-align: middle;
  border: ${(props) => props.hasBorder
    ? `calc(${props.theme.defaultRem} * 0.1) solid transparent`
    : 'none'};
  font-size: ${(props) => `calc(${props.fontSize} * ${props.theme.defaultRem})`};
  border-radius: ${(props) => typeof props.radius === 'number'
    ? `calc(${props.radius} * ${props.theme.defaultRem})`
    : props.radius};
`;

const StyledPrimaryLabel = styled(StyledLabel)`
  background-color: ${(props) => props.theme.colors[props.color].normal};
  border-color: ${(props) => props.theme.colors[props.color].normal};
  color: ${(props) => props.theme.colors[
    defineForegroundColor(props.theme.colors[props.color].dark)
  ]};
`;

const StyledMaterialLabel = styled(StyledLabel)`
  background-color: ${(props) => props.theme.colors[props.color].bright};
  border-color: ${(props) => props.theme.colors[props.color].bright};
  color: ${(props) => props.theme.colors[props.color].normal};
`;

const StyledOutlineLabel = styled(StyledLabel)`
  background-color: transparent;
  border-color: ${(props) => props.theme.colors[props.color].normal};
  color: ${(props) => props.theme.colors[props.color].normal};
`;

const StyledQuietLabel = styled(StyledLabel)`
  background: none;
  border-color: transparent;
  color: ${(props) => props.theme.colors[props.color].normal};
`;

export {
  StyledLabel,
  StyledPrimaryLabel,
  StyledMaterialLabel,
  StyledOutlineLabel,
  StyledQuietLabel,
};
