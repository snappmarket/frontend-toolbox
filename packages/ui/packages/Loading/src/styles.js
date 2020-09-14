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
