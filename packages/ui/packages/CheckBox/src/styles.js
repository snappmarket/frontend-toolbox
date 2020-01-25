/* eslint-disable prettier/prettier */
import Styled from 'styled-components';

const StyledCheckboxWrapper = Styled.button`
  background-color: ${(props) => !props.selected ? 'transparent' : props.theme.colors[props.status].light};
  display: flex;    
  align-items: center;
  justify-content: center;
  width: ${(props) => `calc(${props.size} * ${props.theme.defaultRem})`};
  height: ${(props) => `calc(${props.size} * ${props.theme.defaultRem})`};
  padding: calc(${(props) => props.theme.defaultRem} * 0.3);
  border: ${(props) => props.border && !props.selected
    ? `solid calc(${props.theme.defaultRem} * 0.1) ${props.theme.colors.gray.light}`
    : 'none'};
  color: ${(props) => props.theme.colors.white};
  border-radius: calc(${(props) => props.theme.defaultRem} * 0.2);
  transition: all 0.5s ease 0s;
  &:hover {
      border-color: ${(props) => props.theme.colors[props.status].light};
  }
  &:disabled {
      background-color: ${(props) => props.theme.colors.gray['ultra-light']};
    border-color: ${(props) => props.theme.colors.gray['ultra-light']};
  }
  .icon {
    font-size: ${(props) => `calc(${props.size - 1} * ${props.theme.defaultRem})`};
    color: 
    ${(props) => (!props.disabled ? 'white' : props.theme.colors.gray.light)};
  }
`;

export { StyledCheckboxWrapper };
