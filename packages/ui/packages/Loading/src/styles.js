// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
/* eslint-disable indent */
export const StyledLoading = Styled.div`
  &.loader,
  &.loader:before,
  &.loader:after {
      border-radius: 50%;
      width: 0.7em;
      height: 0.7em;
      animation-fill-mode: both;
      animation: loading 1.8s infinite ease-in-out;
  }
  
  &.loader{
      color: ${(props) => props.theme.colors.white};
      font-size: inherit;
      position: absolute;
      transform: translateZ(0);
      animation-delay: -0.16s;
      left: ${(props) => (props.direction === 'left' ? 0 : 'auto')};
      right: ${(props) => (props.direction === 'right' ? 0 : 'auto')};
      margin-left: ${(props) => (props.direction === 'left' ? '2em' : 'auto')};
      margin-right: ${(props) => (props.direction === 'right' ? '2em' : 'auto')};
      margin-top: -1em;
  }
  
  &.loader:before, &.loader:after {
      content: '';
      position: absolute;
      top: 0;
  }
  &.loader:before {
      left: -1em;
      animation-delay: ${(props) => props.direction === 'right' ? '-0.32s;' : 0};
  }
  &.loader:after {
      right: -1em;
      animation-delay: ${(props) => (props.direction === 'left' ? '-0.32s;' : 0)};
  }
  @-webkit-keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 1em 0 -1em;
    }
    40% {
      box-shadow: 0 1em 0 0;
    }
  }
  @keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 1em 0 -1em;
    }
    40% {
      box-shadow: 0 1em 0 0;
    }
  }
`;

export const StyledCircleWave = Styled.div`
  width: ${(props) => `calc(${props.theme.defaultRem} * ${props.size})`};
  height: ${(props) => `calc(${props.theme.defaultRem} * ${props.size})`};
  margin: 0 calc(${(props) => props.theme.defaultRem} * 1.4);
  border-radius: 50%;
  background: ${(props) => props.theme.colors[props.color].normal};
  animation: fade-circle-wave 1.4s infinite;
  @keyframes fade-circle-wave {
    0% {
      box-shadow: nones
    }
    50% {
      box-shadow: 0 0 0 ${(props) => `calc(${props.theme.defaultRem} * 0.3) ${
          props.theme.colors.white
        },0 0 0 calc(${props.theme.defaultRem} * 0.6) ${
          props.theme.colors[props.color].normal
        }`};
    }
    100% {
      box-shadow: none
    }
  }
`;

export const StyledLogoAnimation = Styled.div`
  animation: alertPulse 1s ease-out;
  animation-iteration-count: infinite;
  min-width: ${(props) => `calc(${props.theme.defaultRem} * ${props.size * 2})`}; 
  min-height: ${(props) => `calc(${props.theme.defaultRem} * ${props.size * 2})`}; 
  svg {
    width: ${(props) => `calc(${props.theme.defaultRem} * ${props.size * 2})`} !important; 
    height: ${(props) => `calc(${props.theme.defaultRem} * ${props.size})`} !important; 
    * {
      fill: ${(props) => props.theme.colors.gray.light} !important; 
    }
  }
  @keyframes alertPulse {
    0% {opacity: 1}
    50% {opacity: 1}
    75% {opacity: 0.65}
    100% {opacity: 1}
  }
`;
/* eslint-enable indent */
