/* eslint-disable prettier/prettier */
import Styled from 'styled-components';

const StyledInputWrapper = Styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin: calc(${props => props.theme.defaultRem} * 0.8) auto;
`;

const StyledInput = Styled.input`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  background: none;
  border: calc(${props => props.theme.defaultRem} * 0.1) solid
    ${props => props.theme.colors[props.status]['ultra-light']};
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  height: calc(${props => props.theme.defaultRem} * 4);
  width: 100%;
  padding: calc(${props => props.theme.defaultRem} * 1.5);
  border-radius: calc(${props => props.theme.defaultRem} * 0.3);
  transition: all 0.3s ease 0s;
  box-shadow: none;
  outline: none;
  -webkit-appearance: none;
  &:focus {
    border-color: ${props => props.theme.colors.blue.dark};
  }
  &:hover {
    border-color: ${props => props.theme.colors[props.status].light};
  }
  &:disabled {
  }
  &::placeholder {
    color: ${props => props.theme.colors.gray.normal};
  }
`;

const StyledLabel = Styled.label`
  color: ${props => props.theme.colors.gray.dark};
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  margin-bottom: calc(${props => props.theme.defaultRem} * 0.6);
`;

const StyledStar = Styled.span`
  color: ${props => props.theme.colors.red.normal};
  margin-right: calc(${props => props.theme.defaultRem} * 0.2);
`;

const StyledMessage = Styled.div`
  color: ${props =>
    props.theme.colors[props.type === 'success' ? 'green' : 'red'].normal};
  font-size: calc(${props => props.theme.defaultRem} * 1.2);
  margin-top: calc(${props => props.theme.defaultRem} * 0.8);
`;

export {
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledStar,
  StyledMessage,
};
