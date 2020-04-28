// eslint-disable-next-line import/no-named-default
// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import lighten from 'polished/lib/color/lighten';

export const StyledProgressBarWrapper = Styled.div`
  border-radius: calc(${props => props.theme.defaultRem} * 2);
  background-color: ${props => lighten(0.5, props.theme.colors.gray.normal)};
  overflow: hidden;
`;
export const StyledProgressBar = Styled.div`
  height: calc(${props => props.theme.defaultRem} * 0.75);
  background-color: ${props => props.theme.colors.green.normal};
  width: ${props => props.percent}%;
  max-width: 100%;
  transition: 0.5s linear;
`;
