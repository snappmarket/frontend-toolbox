// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {color, rem, makeRgbaColor} from '@snappmarket/helpers'

export const StyledToolbarWrapper = Styled.span`
  position: relative;
  display: inline-block;
  &:hover {
    > span:last-child {
      opacity: 1;
    }
  }
`;
export const StyledToolbar = Styled.span`
  position: absolute;
  background-color: ${makeRgbaColor(0.5, 'black')};
  color: ${color('white')};
  padding: ${rem(0.8, 1.6)};
  border-radius: ${rem(0.5)};
  opacity: 0;
  transition: all 0.3s ease 0.1s;
  &:after {
    position: absolute;
    border: ${rem(1)} solid ${makeRgbaColor(0.5, 'black')};
    content: "";
  }
  ${props =>
    props.position === 'top' &&
    `
    left: 50%;
    top: ${rem(-1)(props)};
    transform: translate(-50%, -100%);
    &:after {
      border-top-color: ${makeRgbaColor(0.5, 'black')(props)};
      border-bottom: none;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
  ${props =>
    props.position === 'bottom' &&
    `
    left: 50%;
    bottom: ${rem(-1)(props)};
    transform: translate(-50%, 100%);
    &:after {
      border-bottom-color: ${makeRgbaColor(0.5, 'black')(props)};
      border-top: none;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
  ${props =>
    props.position === 'left' &&
    `
    left: ${rem(-1)(props)};
    top: 50%;
    transform: translate(-100%, -50%);
    &:after {
      border-left-color: ${makeRgbaColor(0.5, 'black')(props)};
      border-right: none;
      top: 50%;
      left: 100%;
      transform: translate(0, -50%);
    }
  `}
  ${props =>
    props.position === 'right' &&
    `
    right: ${rem(-1)(props)};
    top: 50%;
    transform: translate(100%, -50%);
    &:after {
      border-right-color: ${makeRgbaColor(0.5, 'black')(props)};
      border-left: none;
      top: 50%;
      right: 100%;
      transform: translate(0, -50%);
    }
   `}
`;
