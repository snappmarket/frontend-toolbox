// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';

export const StyledCountdownWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledCountDownItem = Styled.span`
  text-align: center;
  &:not(:last-child) {
    margin-right: 1rem;
    > span {
      &:after {
        content: ':';
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translate(50%, -50%);
      }
    }
  }
  > * {
    display: block;
  }
  > span {
    position: relative;
  }
`;
