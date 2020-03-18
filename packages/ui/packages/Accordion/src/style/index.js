// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
const StyledAccordion = Styled.div`
  font-size: calc(1.4 * ${props => props.theme.defaultRem});
  margin: ${props => `calc(1.6 * ${props.theme.defaultRem})`} 0;
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
`;

const StyledAccordionHead = Styled.div`
  display: flex;
  background: ${props => props.theme.colors.gray.white};
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
