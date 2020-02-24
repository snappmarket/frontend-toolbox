/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
const StyledToggleWrapper = Styled.button`
  width: ${(props) => `calc(${props.theme.defaultRem} * ${props.size} * 2.2)`};
  height: 100%;
  border-radius: ${(props) => `calc(${props.theme.defaultRem} * ${props.size + 1})`};
  display: flex;
  padding: 0;
  position: relative;
  outline: none;
  cursor: pointer;
  > span {
    width: ${(props) => `calc(${props.theme.defaultRem} * ${props.size})`};
    height: ${(props) => `calc(${props.theme.defaultRem} * ${props.size})`};
    background-color: ${(props) => props.theme.colors.white};
    border: inherit;
    display: block;
    border-radius: 50%;
    transition: inherit;
  }
  ${(props) => props.selected
    ? `
    background-color: ${props.theme.colors[props.status].light}};
    color: ${props.theme.colors[props.status].light}};
    justify-content: start;
  `
    : `
    background-color: ${props.theme.colors.gray.light};
    justify-content: flex-end;
  `}
  border: solid ${(props) => `calc(${props.theme.defaultRem} * 0.1)`}
    ${(props) => !props.selected
    ? props.theme.colors.gray.light
    : props.theme.colors[props.status].light};
  line-height: 0;
`;

export { StyledToggleWrapper };
