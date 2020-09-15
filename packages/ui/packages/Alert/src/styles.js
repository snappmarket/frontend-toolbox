// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { rem, color } from '@snappmarket/helpers'
import { StyledButton } from '../../Button/src/styles';

export const StyledAlertWrapper = Styled.div`
  background: ${props => color(props.bgColor, props.bgShade)(props)};
  color: ${props => color(props.color, props.colorShade)(props)};
  font-size: ${rem(1.4)};
  border-radius: ${rem(0.5)};
  border: ${rem(0.1)} solid ${props => color(props.color, props.colorShade)(props)};
  padding: ${rem(0.8, 1.6)};
`;

export const StyledCloseButton = Styled(StyledButton)`
  position: relative;
  left: ${rem(-1.1)};
  top:${rem(0.4)};
  svg {
    width: ${rem(1.2)};
    height: ${rem(1.2)};
    fill: ${color('gray', 'dark')} !important;
  }
`;
