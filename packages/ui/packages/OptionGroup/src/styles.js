// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, color} from '@snappmarket/helpers'

export const StyledOptionGroup = Styled.div`
  width: 100%;
`;

export const StyledOptionItem = Styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:not(:first-child) {
    margin-top: ${rem(1)};
  }
  > span {
    width: 100%;
  }
  button {
    svg {
      fill: ${color('white')};
    }
    &:active {
      svg {
        fill: ${color('white')};
      }
    }
  }
  button > svg {
    margin-left: 0 !important;
    width: ${rem(1.5)} !important;
    height: ${rem(1.5)} !important;
  }
`;
