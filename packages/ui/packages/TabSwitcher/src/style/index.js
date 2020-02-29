// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import { makeRgba } from '@snappmarket/helpers/index';
import { StyledPrimaryButton } from '../../../Button/src/styles';

/* eslint-disable indent */
const StyledTab = Styled(StyledPrimaryButton)`
  display: inline-flex;
  margin: 0 ${(props) => `calc(1.6 * ${props.theme.defaultRem})`};
  height: ${(props) => `calc(3.5 * ${props.theme.defaultRem})`};
  font-size: ${(props) => `calc(1.4 * ${props.theme.defaultRem})`};
  min-width: ${(props) => `calc(11 * ${props.theme.defaultRem})`};
  background-color: ${(props) => props.isActive
      ? props.theme.colors.blue.normal
      : props.theme.colors.blue.bright};
  color: ${(props) => props.isActive ? props.theme.colors.white : props.theme.colors.blue.normal};
    
  &:first-child {
    margin: 0;
  }
  &:hover {
    color: ${(props) => props.isActive
        ? props.theme.colors.white
        : props.theme.colors.blue.normal};
    background-color: ${(props) => props.isActive
        ? props.theme.colors.blue.normal
        : props.theme.colors.blue.bright};
  }
  &:focus,
  &:visited,
  &:checked,
  &:active {
    background-color: ${(props) => props.isActive
        ? props.theme.colors.blue.normal
        : props.theme.colors.blue.bright};
    box-shadow: 0 0 calc(${(props) => props.theme.defaultRem} * 1)
      calc(${(props) => props.theme.defaultRem} * -0.1)
      ${(props) => makeRgba(
          0.5,
          props.isActive
            ? props.theme.colors.blue.normal
            : props.theme.colors.blue.light,
        )};
  }
  border: none;
  font-weight: 500;
  padding-left: ${(props) => `calc(1.6 * ${props.theme.defaultRem})`};;
  padding-right: ${(props) => `calc(1.6 * ${props.theme.defaultRem})`};;
`;

const StyledTabPanel = Styled.div`
  border-radius: calc(${(props) => props.theme.defaultRem} * 0.5);
  margin-top: ${(props) => `calc(2.4 * ${props.theme.defaultRem})`};
  font-size: ${(props) => `calc(1.4 * ${props.theme.defaultRem})`};
  color: ${(props) => props.theme.colors.gray.dark};
`;

const StyledTabSwitcher = Styled.div`
  padding: ${(props) => `calc(1.6 * ${props.theme.defaultRem})`};
`;
/* eslint-enable indent */

export { StyledTabSwitcher, StyledTabPanel, StyledTab };
