// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { rem, color, makeRgbaColor } from '@snappmarket/helpers'

export const StyledInputRangeWrapper = Styled.div`
  .input-range__slider {
    appearance: none;
    background: ${color('blue', 'normal')};
    border: ${rem(0.1)} solid ${color('blue', 'normal')};
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: ${rem(1)};
    margin-top: ${rem(-0.65)};
    outline: none;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    width: ${rem(1)};
  }
  .input-range__slider:active {
    transform: scale(1.3);
  }
  .input-range__slider:focus {
    box-shadow: ${rem(0,0,0,0.5)} ${makeRgbaColor(0.2, 'blue', 'normal')};
  }
  .input-range--disabled .input-range__slider {
    background: ${color('gray', 'light')};
    border: ${rem(0.1)} solid ${color('gray', 'light')};
    box-shadow: none;
    transform: none;
  }

  .input-range__slider-container {
    transition: left 0.3s ease-out;
  }

  .rtl .input-range__slider {
    margin-left: auto;
    margin-right: ${rem(-0.5)};
  }

  .rtl .input-range__slider-container {
    transition: right 0.3s ease-out;
  }

  .input-range__slider {
    margin-left: ${rem(-0.5)};
  }

  .input-range__label {
    color: ${color('gray', 'normal')};
    font-size: ${rem(-0.8)};
    transform: translateZ(0);
    white-space: nowrap;
  }

  .input-range__label--min,
  .input-range__label--max {
    bottom: ${rem(-1.4)};
    position: absolute;
  }

  .input-range__label--min {
    left: 0;
  }

  .input-range__label--max {
    right: 0;
  }

  .input-range__label--value {
    position: absolute;
    top: ${rem(-1.8)};
  }

  .rtl .input-range__label--min {
    left: auto;
    right: 0;
  }

  .rtl .input-range__label--max {
    left: 0;
    right: auto;
  }

  .input-range__label-container {
    left: -50%;
    position: relative;
  }

  .input-range__label--max .input-range__label-container {
    left: 50%;
  }

  .rtl .input-range__label-container {
    left: auto;
    right: -50%;
    position: relative;
  }

  .input-range__label--max .rtl .input-range__label-container {
    left: auto;
    right: 50%;
  }

  .input-range__track {
    background: ${color('gray', 'light')};
    border-radius: ${rem(0.3)};
    cursor: pointer;
    display: block;
    height: ${rem(0.3)};
    position: relative;
  }
  .input-range--disabled .input-range__track {
    background: ${color('gray', 'light')};
  }

  .input-range__track--background {
    left: 0;
    margin-top: ${rem(-1.5)};
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: ${color('blue', 'normal')};
  }

  .rtl .input-range__track {
    transition: right 0.3s ease-out, width 0.3s ease-out;
  }

  .input-range__track {
    transition: left 0.3s ease-out, width 0.3s ease-out;
  }

  .input-range {
    height: ${rem(1)};
    position: relative;
    width: 100%;
  }

  .rtl.input-range {
    direction: rtl;
  }
`;
export const StyledInputRange = Styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 0;
  transform: translateY(-60%);
  .input-range__slider {
    border-color: ${color('blue', 'normal')};
  }
  .input-range__slider, .input-range__track--active {
    background-color: ${color('blue', 'normal')};
  }
`;

export const StyledRangeLabelWrapper = Styled.div`
  font-size: ${rem(1)};
  margin-top: ${rem(2.4)};
  direction: ${props => props.rtl ? 'rtl' : 'ltr'};
  > span{
    font-size: ${rem(1.4)};
    color: ${color('gray', 'dark')};
  }
`;
