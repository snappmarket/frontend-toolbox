// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, makeRgbaColor, color} from '@snappmarket/helpers'

import Button from '../../Button/src';

export const StyledModalWrapper = Styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: right;
  overflow-y: auto;
  z-index: 1001;
  padding: ${rem(4, 0)};
`;
export const StyledLightBox = Styled.div`
  position: absolute;
  min-height: 100vh;
  top: 0;
  width: 100%;
  background: ${makeRgbaColor(0.6, 'black')};
  z-index: 1002;
`;
export const StyledModal = Styled.div`
  margin: 0 auto;
  max-width: calc(100% - ${rem(2)}));
  position: relative;
  z-index: 1003;
  background-color: ${color('white')};
  padding: ${rem(1)};
  border-radius: ${rem(0.5)};
  width: ${props => rem(props.width)(props)};
  opacity: 0;

  &.visible {
    animation: showing 1 linear 0.3s forwards;
    ${props => props.position === 'top' && `
      transform: translateZ(0) translateY(0) scale(1);
    `}
    ${props => props.position === 'center' && `
      transform: translateZ(0) translateY(-50%) scale(1);
    `}
    ${props => props.position === 'bottom' &&  `
      transform: translateZ(0) translateY(-100% - ${rem(1)(props)}) scale(1);
    `}
  }
  @keyframes showing {
    from {
      opacity: 0;
      ${props => props.position === 'top' && `
        top: -50%;
      `}
      ${props => props.position === 'center' && `
        top: 0;
      `}
      ${props => props.position === 'bottom' &&  `
        top: 150%;
      `}
    }
    to {
      opacity: 1;
      ${props => props.position === 'top' && `
        top: ${rem(1)(props)};
      `}
      ${props => props.position === 'center' && `
        top:50%;
      `}
      ${props => props.position === 'bottom' &&  `
        top: 100%;
      `}
    }
  }
`;
export const StyledCloseModalButton = Styled(Button)`
  position: absolute;
  top: ${rem(0.8)};
  left: ${rem(0.8)};
  min-width: auto;
  z-index: 9999;
`;
export const StyledModalHeader = Styled.header`
  border-bottom: solid ${rem(0.1)} ${color('gray', 'bright')};
  padding-bottom: ${rem(1)};
  margin-bottom: ${rem(1)};
  h3 {
    font-size: ${rem(1.6)};
  }
`;
export const StyledModalContent = Styled.main``;
export const StyledModalFooter = Styled.footer`
  border-top: solid ${rem(0.1)} ${color('gray', 'ultra-light')};
  padding-top: ${rem(1)};
  margin-top: ${rem(1)};
 `;
