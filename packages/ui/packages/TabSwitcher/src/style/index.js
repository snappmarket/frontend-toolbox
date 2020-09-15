// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { makeRgbaColor, rem, color } from '@snappmarket/helpers';
import { StyledPrimaryButton } from '../../../Button/src/styles';

export const StyledTab = Styled(StyledPrimaryButton)`
  display: inline-flex;
  margin: ${rem(0, 1.6)};
  height: ${rem(3.5)};
  font-size: ${rem(1.4)};
  min-width: ${rem(11)};
  background-color: ${props => color('blue', props.isActive ? 'normal' : 'bright')(props)};
  color: ${props => props.isActive ? color('white')(props) : color('blue' , 'normal')(props)};

  &:first-child {
    margin: 0;
  }
  &:hover {
    background-color: ${props => color('blue', props.isActive ? 'normal' : 'bright')(props)};
    color: ${props => props.isActive ? color('white')(props) : color('blue' , 'normal')(props)};
  }
  &:focus,
  &:visited,
  &:checked,
  &:active {
    background-color: ${props => color('blue', props.isActive ? 'normal' : 'bright')(props)};
    box-shadow: ${rem(0, 0, 1, -0.1)} ${props => makeRgbaColor(0.5, 'blue', props.isActive ? 'normal' : 'light' )(props)};
  }
  border: none;
  font-weight: 500;
  padding-left: ${rem(1.6)};
  padding-right: ${rem(1.6)};
`;

export const StyledTabPanel = Styled.div`
  border-radius: ${rem(0.5)};
  margin-top: ${rem(2.4)};
  font-size: ${rem(1.4)};
  color: ${color('gray', 'dark')};
`;

export const StyledTabSwitcher = Styled.div`
  padding: ${rem(1.6)};
`;
