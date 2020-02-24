/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
const StyledTextareaWrapper = Styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin: calc(${(props) => props.theme.defaultRem} * 0.8) auto;
`;

const StyledTextarea = Styled.textarea`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  background: none;
  border: calc(${(props) => props.theme.defaultRem} * 0.1) solid
    ${(props) => props.theme.colors[props.status]['ultra-light']};
  font-size: calc(${(props) => props.theme.defaultRem} * 1.4);
  height: calc(${(props) => props.theme.defaultRem} * 4);
  min-height: calc(${(props) => props.theme.defaultRem} * 9.5);
  width: 100%;
  padding: calc(${(props) => props.theme.defaultRem} * 1.5);
  border-radius: calc(${(props) => props.theme.defaultRem} * 0.3);
  transition: all 0.3s ease 0s;
  box-shadow: none;
  outline: none;
  -webkit-appearance: none;
  &:focus {
    border-color: ${(props) => props.theme.colors.blue.dark};
  }
  &:hover {
    border-color: ${(props) => props.theme.colors[props.status].light};
  }
  &:disabled {
  }
`;

const StyledLabel = Styled.label`
  color: ${(props) => props.theme.colors.gray.dark};
  font-size: calc(${(props) => props.theme.defaultRem} * 1.4);
  margin-bottom: calc(${(props) => props.theme.defaultRem} * 0.6);
`;

const StyledStar = Styled.span`
  color: ${(props) => props.theme.colors.red.normal};
  margin-right: calc(${(props) => props.theme.defaultRem} * 0.2);
`;

const StyledMessage = Styled.div`
  color: ${(props) => props.theme.colors[props.type === 'success' ? 'green' : 'red'].normal};
  font-size: calc(${(props) => props.theme.defaultRem} * 1.2);
  margin-top: calc(${(props) => props.theme.defaultRem} * 0.8);
`;

export {
  StyledLabel,
  StyledMessage,
  StyledStar,
  StyledTextarea,
  StyledTextareaWrapper,
};
