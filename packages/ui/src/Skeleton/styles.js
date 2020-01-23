import Styled from 'styled-components';
import darken from 'polished/lib/color/darken';
import { decideMeasurement } from 'constants/Helpers/themeHelpers';

const StyledBox = Styled.div`
  background-color: ${props =>
    props.justBorder
      ? 'transparent'
      : props.background || darken(0.06, props.theme.colors.white)};
  border-radius: ${props => decideMeasurement(props.radius)};
  border:  ${props =>
    props.justBorder
      ? `2px solid ${darken(0.06, props.theme.colors.white)}`
      : 'none'};

  animation: alertPulse 1.2s ease-out;
  animation-iteration-count: infinite;
  display: 'flex';
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => decideMeasurement(props.width)};
  height: ${props => decideMeasurement(props.height)};
  @keyframes alertPulse {
    0% {opacity: 1}
    50% {opacity: 1}
    75% {opacity: 0.65}
    100% {opacity: 1}
  }
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
