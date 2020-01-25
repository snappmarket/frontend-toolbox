import Styled from 'styled-components';
import Modal from '../Modal';
import { Container, Col } from '../GridSystem';

export const StyledConfirmDialog = Styled(Modal)`
  font-size: 14px;
  footer{ 
    border-top: none;
  }
`;

export const StyledConfirmDialogContainer = Styled(Container)`
  padding-top: calc(${(props) => props.theme.defaultRem} * 0.8);
  padding-right: calc(${(props) => props.theme.defaultRem} * 0.8);
`;

export const StyledButtonWrapper = Styled(Container)`
  padding-bottom: calc(${(props) => props.theme.defaultRem} * 1);
  button {
    width: auto !important;
    min-width: auto;
    padding: 0 calc(${(props) => props.theme.defaultRem} * 2) !important;
  }
`;

export const StyledIconCol = Styled(Col)`
  > div {
    background: ${(props) => props.theme.colors.blue.bright};
    width: calc(${(props) => props.theme.defaultRem} * 6);
    height: calc(${(props) => props.theme.defaultRem} * 6);
    overflow: hidden;
    svg {
      width: calc(${(props) => props.theme.defaultRem} * 3.5);
      height: calc(${(props) => props.theme.defaultRem} * 3.5);
      color: ${(props) => props.theme.colors.blue.normal};
    }
  }
`;

export const StyledContentCol = Styled(Col)`
  margin-top: calc(${(props) => props.theme.defaultRem} * 0.8);
  strong {
    color: ${(props) => props.theme.colors.gray.dark};
  }
  p {
    color: ${(props) => props.theme.colors.gray.normal};
    font-size: calc(${(props) => props.theme.defaultRem} * 1.3);
  }
`;
