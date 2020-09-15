// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {color, rem} from '@snappmarket/helpers'

export const StyledLinedText = Styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  width: 100%;
  color: ${color('gray', 'dark')};
  margin: ${rem(0.8, 0)};
  font-size: ${rem(1.6)};
  &:before,
  &:after {
    content: "";
    flex-grow: 1;
    background: ${color('gray', 'ultra-light')};
    height: ${rem(0.1)};
    font-size: ${rem(0)};
    line-height: ${rem(0)};
  }
  &:before {
    margin-left: ${rem(2)};
  }
  &:after {
    margin-right: ${rem(2)};
  }
`;
