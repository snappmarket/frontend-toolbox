import Styled from 'styled-components';
import Button from '../Button';

export const StyledAlertWrapper = Styled.div`
  background: ${(props) => props.theme.colors[props.bgColor][props.bgShade]};  
  color: ${(props) => props.theme.colors[props.color][props.colorShade]};
  font-size: calc(${(props) => props.theme.defaultRem} * 1.4);
  border-radius: calc(${(props) => props.theme.defaultRem} * 0.5);
  border: calc(${(props) => props.theme.defaultRem} * 0.1) solid ${(props) => props.theme.colors[props.color][props.colorShade]};
  padding: ${(props) => `calc(${props.theme.defaultRem} * 0.8) calc(${props.theme.defaultRem} * 1.6) calc(${props.theme.defaultRem} * 0.8) calc(${props.theme.defaultRem} * 1.6)`};
`;

export const StyledCloseButton = Styled(Button)`
  position: relative;
  left: calc(${(props) => props.theme.defaultRem} * -1.1);
  top: calc(${(props) => props.theme.defaultRem} * 0.4);
  svg {
    width: calc(${(props) => props.theme.defaultRem} * 1.2);  
    height: calc(${(props) => props.theme.defaultRem} * 1.2);  
    fill: ${(props) => props.theme.colors.gray.dark} !important;
  }
`;
