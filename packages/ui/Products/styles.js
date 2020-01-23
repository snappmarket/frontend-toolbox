import Styled from 'styled-components';
import Grid from 'components/Global/Grid';
import { VerticalProduct } from 'components/Global/Product';

export const StyledProducts = Styled(Grid)``;
export const StyledProductWrapper = Styled.div``;

export const StyledVerticalProduct = Styled(VerticalProduct)`
  margin: calc(${props => props.theme.defaultRem} * 0.5) calc(${props =>
  props.theme.defaultRem} * 0.8);
  padding: calc(${props => props.theme.defaultRem} * 0.4);
  border: ${props =>
    `calc(${props.theme.defaultRem} * 0.1) solid ${props.theme.colors.gray['ultra-light']}`};
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  direction: rtl;
  text-align: right;
  min-height: calc(${props => props.theme.defaultRem} * 32);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const StyledProductSliderItem = Styled(VerticalProduct)`
    padding: calc(${props => props.theme.defaultRem} * 0.4);
    min-height: calc(${props => props.theme.defaultRem} * 32);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

/* eslint-disable indent */

export const StyledProductSliderWrapper = Styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    border: ${props =>
      `calc(${props.theme.defaultRem} * 0.1) solid ${props.theme.colors.gray['ultra-light']}`};
    border-radius: calc(${props => props.theme.defaultRem} * 0.5);
    padding: calc(${props => props.theme.defaultRem} * 2);
    margin: calc(${props => props.theme.defaultRem} * 2) 0;
`;

export const StyledProductSliderTitle = Styled.div`
    margin-bottom: calc(${props => props.theme.defaultRem});
    display: flex;
    justify-content: space-between;
    border-bottom: ${props =>
      `calc(${props.theme.defaultRem} * 0.3) solid ${props.theme.colors.gray.bright}`};
    > span {
      padding: calc(${props => props.theme.defaultRem} * 0.5) 0;
      font-size: calc(${props => props.theme.defaultRem} * 1.3);
      font-weight: bold;
      border-bottom: ${props =>
        `calc(${props.theme.defaultRem} * 0.3) solid ${props.theme.colors.blue.normal}`};
    };
    > a {
        font-size: calc(${props => props.theme.defaultRem} * 1.3);
        color: ${props => props.theme.colors.gray.normal};
    }
`;

/* eslint-enable indent */
