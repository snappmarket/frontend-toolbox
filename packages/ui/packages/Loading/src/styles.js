// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, color} from '@snappmarket/helpers'

export const StyledLoading = Styled.div`
  &.loader,
  &.loader:before,
  &.loader:after {
    border-radius: 50%;
    width: ${rem(0.7)};
    height: ${rem(0.7)};
    animation-fill-mode: both;
    animation: loading 1.8s infinite ease-in-out;
    will-change: box-shadow;
    transform: translateZ(0);
  }

  &.loader{
    color: ${color('white')};
    font-size: inherit;
    position: absolute;
    transform: translateZ(0);
    animation-delay: -0.16s;
    left: ${props => (props.direction === 'left' ? 0 : 'auto')};
    right: ${props => (props.direction === 'right' ? 0 : 'auto')};
    margin-left: ${props => (props.direction === 'left' ? rem(2)(props) : 'auto')};
    margin-right: ${props => (props.direction === 'right' ? rem(2)(props) : 'auto')};
    margin-top: ${rem(-1)};
  }

  &.loader:before, &.loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &.loader:before {
      left: ${rem(-1)};
      animation-delay: ${props => props.direction === 'right' ? '-0.32s;' : 0};
  }
  &.loader:after {
      right: ${rem(-1)};
      animation-delay: ${props => (props.direction === 'left' ? '-0.32s;' : 0)};
  }
  @-webkit-keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: ${rem(0, 1, 0, -1)};
    }
    40% {
      box-shadow: ${rem(0, 1, 0, 0)};
    }
  }
  @keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: ${rem(0, 1, 0, -1)};
    }
    40% {
      box-shadow: ${rem(0, 1, 0, 0)};
    }
  }
`;

export const StyledCircleWave = Styled.div`
  width: ${props => rem(props.size)(props)};
  height: ${props => rem(props.size)(props)};
  margin: ${rem(0, 1.4)};
  border-radius: 50%;
  background: ${props => color(props.color, 'normal')(props)};
  animation: fade-circle-wave 1.4s infinite;
  will-change: box-shadow;
  transform: translateZ(0);
  @keyframes fade-circle-wave {
    0% {
      box-shadow: nones
    }
    50% {
      box-shadow: ${rem(0, 0, 0, 0.3)} ${color('white')}, ${rem(0, 0, 0, 0.6)} ${props => color(props.color, 'normal')(props)};
    }
    100% {
      box-shadow: none
    }
  }
`;

export const StyledLogoAnimation = Styled.div`
  min-width: ${props => rem(props.size * 2)(props)};
  min-height: ${props => rem(props.size * 2)(props)};
  &.animating {
    animation: alertPulse 1.2s ease-out;
    animation-iteration-count: infinite;
    will-change: opacity;
    transform: translateZ(0);
  }
  svg {
    width: ${props => rem(props.size * 2)(props)} !important;
    height: ${props => rem(props.size)(props)} !important;
    * {
      fill: ${color('gray', 'light')} !important;
    }
  }
  @keyframes alertPulse {
    0% {opacity: 1}
    50% {opacity: 1}
    75% {opacity: 0.6}
    100% {opacity: 1}
  }
`;


export const StyleLoadingBarWrapper = Styled.div`
  width: 100%;
  height: ${props => rem(props.height)(props)};
  position: relative;
  top: 0;
  left: 0;
  bottom: auto;
  right: auto;
`;

export const StyledLoadingLine = Styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: auto;
  right: auto;
  width: 100%;
  height: 100%;
  transform-origin: 100% 0%;
  animation: loading-bar ${props => props.duration}s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite;
  
  .loading-line-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background: ${color('black')};
    transform-origin: 0% 0%;
    &.rainbow {
      background: red; /* For browsers that do not support gradients */
      background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet); /* For Safari 5.1 to 6.0 */
      background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Opera 11.1 to 12.0 */
      background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Firefox 3.6 to 15 */
      background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); /* Standard syntax (must be last) */
    }
  }

  .loading-line-inner-1 {
    opacity: 0;  // change for inner line opacity, currently 0/hidden
    animation: loading-bar-inner-1 ${props => props.duration}s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite;
  }

  .loading-line-inner-2 {
    opacity: 1;
    animation: loading-bar-inner-2 ${props => props.duration}s cubic-bezier(0.645, 0.045, 0.355, 1) 0s infinite;
  }

  .loading-line-inner {
    position: absolute;
    top: 0;
    left: 0;
    bottom: auto;
    right: auto;
    width: 100%;
    height: 100%;
    background-color: red;
    transform-origin: 0% 0%;
  }

  @keyframes loading-bar {
    0% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }


  @keyframes loading-bar-inner-1 {
    0% {
      transform: scaleX(0);
    }
    25% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1);
    }
  }
    
  
  @keyframes loading-bar-inner-2 {
    0% {
      transform: scaleX(0);
    }
    25% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;
