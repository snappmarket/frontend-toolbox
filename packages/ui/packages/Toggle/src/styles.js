// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
const StyledToggleWrapper = Styled.button`
  width: ${props => `calc(${props.theme.defaultRem} * ${props.size} * 2.2)`};
  border-radius: ${props =>
    `calc(${props.theme.defaultRem} * ${props.size + 1})`};
  display: flex;
  padding: 0;
  position: relative;
  outline: none;
  cursor: pointer;
  background-color: ${props => props.theme.colors.gray.light};
  justify-content: flex-end;
  border: solid ${props => `calc(${props.theme.defaultRem} * 0.1)`} ${props => props.theme.colors.gray.light};
  line-height: 0;
  &.selected {
    background-color: ${props => props.theme.colors[props.status].light};
    color: ${props => props.theme.colors[props.status].light};
    justify-content: start;
    border-color: ${props => props.theme.colors[props.status].light};
  }
  &.disabled {
    filter: grayscale(1);
  }
  > span {
    width: ${props => `calc(${props.theme.defaultRem} * ${props.size})`};
    height: ${props => `calc(${props.theme.defaultRem} * ${props.size})`};
    background-color: ${props => props.theme.colors.white};
    border: inherit;
    display: block;
    border-radius: 50%;
    transition: inherit;
  }
`;

export { StyledToggleWrapper };
