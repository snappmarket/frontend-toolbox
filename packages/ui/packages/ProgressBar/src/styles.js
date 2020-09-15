// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import lighten from 'polished/lib/color/lighten';
import {rem , color} from '@snappmarket/helpers'

export const StyledProgressBarWrapper = Styled.div`
  border-radius: ${rem(2)};
  background-color: ${props => lighten(0.5, color('gray', 'normal')(props))};
  overflow: hidden;
`;
export const StyledProgressBar = Styled.div`
  height: ${rem(0.75)};
  background-color: ${props => color(props.color, 'normal')(props)};
  width: ${props => props.percent}%;
  max-width: 100%;
  transition: 0.5s linear;
`;
