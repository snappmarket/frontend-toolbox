// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import darken from 'polished/lib/color/darken';

import { decideMeasurement, rem, color } from '@snappmarket/helpers';

export const StyledBox = Styled.div`
  background-color: ${props => props.justBorder ?
    'transparent' :
    props.background || darken(0.06, color('white')(props))};
  background-size: ${props => typeof props.backgroundSize === 'string' ?
    props.backgroundSize :
    rem(props.backgroundSize)(props) };
  border-radius: ${props => decideMeasurement(props.radius)};
  border: ${props => props.justBorder ?
    `${rem(0.2)(props)} solid ${darken(0.06, color('white')(props))}` :
    'none'};
  display: 'flex';
  justify-content: ${props => props.justifyContent ? props.justifyContent: 'center'};
  align-items: ${props => props.alignItems ? props.alignItems: 'center'};
  width: ${props => decideMeasurement(props.width)};
  height: ${props => decideMeasurement(props.height)};
`;

export const StyledImage = Styled(StyledBox)`
  background: linear-gradient(30deg, transparent 37%, ${color('white')} 37%),
    linear-gradient(-30deg, transparent 37%, ${color('white')} 37%),
    linear-gradient(to bottom, ${color('gray', 'light')}, ${color('black')});
`;

export const StyledMap = Styled(StyledBox)`
  background: linear-gradient(30deg, transparent 37%, ${color('white')} 37%),
    linear-gradient(-30deg, transparent 37%, ${color('white')} 37%),
    linear-gradient(to bottom, ${color('gray', 'light')}, ${color('black')});
`;
