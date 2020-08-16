// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, color} from '@snappmarket/helpers'

export const StyledSelectWrapper = Styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  margin: ${rem(0.8, 'auto')};
`;

export const StyledSelectIconWrapper = Styled.div`
  position: relative;
  svg {
    position: absolute;
    bottom: ${rem(1.3)};
    left: ${rem(1)};
    width: ${rem(1)} !important;
    fill: ${color('gray', 'dark')};
  }
  &.ltr{
    svg{
      right: ${rem(1)};
      left: auto;
    }
  }
`;

export const StyledSelect = Styled.select`
  width: 100%;
  border: ${rem(0.1)} solid ${props => color(props.status, 'ultra-light')(props)};
  font-size: ${rem(1.4)};
  height: ${rem(4)};
  width: 100%;
  padding: ${rem(0, 1.5)};
  border-radius: ${rem(0.3)};
  transition: all 0.3s ease 0s;
  box-shadow: none;
  outline: none;
  -webkit-appearance: none;
  &:hover {
    border-color: ${props => color(props.status, 'light')(props)};
  }
  &::placeholder {
    color: ${color('gray', 'normal')};
  }
`;

export const StyledLabel = Styled.label`
  color: ${color('gray', 'dark')};
  font-size: ${rem(1.4)};
  margin-bottom: ${rem(0.6)};
`;

export const StyledStar = Styled.span`
  color: ${color('red', 'normal')};
  margin-right: ${rem(0.2)};
`;

export const StyledMessage = Styled.div`
  color: ${props => color(props.type === 'success' ? 'green' : 'red', 'normal')(props)};
  font-size: ${rem(1.2)};
  margin-top: ${rem(0.8)};
`;
