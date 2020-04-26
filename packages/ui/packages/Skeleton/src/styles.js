// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import darken from 'polished/lib/color/darken';

import { decideMeasurement } from '@snappmarket/helpers';

const StyledBox = Styled.div`
  background-color: ${props =>
    props.justBorder
      ? 'transparent'
      : props.background || darken(0.06, props.theme.colors.white)};
      ${props => typeof props.backgroundSize === 'string' ? `background-size: ${props.backgroundSize}` :
    `background-size: calc(${props.theme.defaultRem} * ${props.backgroundSize})`}; 
  border-radius: ${props => decideMeasurement(props.radius)};
  border:  ${props =>
    props.justBorder
      ? `2px solid ${darken(0.06, props.theme.colors.white)}`
      : 'none'};
  display: 'flex';
  justify-content: ${props => props.justifyContent ? props.justifyContent: 'center'};
  align-items: ${props => props.alignItems ? props.alignItems: 'center'};
  width: ${props => decideMeasurement(props.width)};
  height: ${props => decideMeasurement(props.height)};
`;

const StyledImage = Styled(StyledBox)`
  background:  linear-gradient(30deg, transparent 37%, #fff 37%), 
            linear-gradient(-30deg, transparent 37%, #fff 37%), 
            linear-gradient(to bottom, #ccc, #000);
`;

const StyledMap = Styled(StyledBox)`
  background:  linear-gradient(30deg, transparent 37%, #fff 37%), 
            linear-gradient(-30deg, transparent 37%, #fff 37%), 
            linear-gradient(to bottom, #ccc, #000);
`;

export { StyledBox, StyledImage, StyledMap };
