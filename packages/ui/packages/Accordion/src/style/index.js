// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { rem, color } from '@snappmarket/helpers'
const StyledAccordion = Styled.div`
  font-size: ${rem(1.4)};
  margin: ${rem(1.6, 0)};
  border-radius: ${rem(0.5)};
`;

const StyledAccordionHead = Styled.div`
  display: flex;
`;

const StyledAccordionContent = Styled.div`
  &.showAnimation {
    -webkit-animation: fadeInDown 0.2s ease-out both;
    -moz-animation: fadeInDown 0.2s ease-out both;
    animation: fadeInDown 0.2s ease-out both;
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -20%, 0);
      transform: translate3d(0, -20%, 0);
    }
    0% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`;

export { StyledAccordion, StyledAccordionHead, StyledAccordionContent };
