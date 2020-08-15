// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
import {rem, color} from "@snappmarket/helpers";

import Modal from '../../Modal/src';
import { Container, Col } from '../../GridSystem/src';

export const StyledConfirmDialog = Styled(Modal)`
  font-size: 14px;
  footer{
    border-top: none;
  }
`;

export const StyledConfirmDialogContainer = Styled(Container)`
  padding-top: ${rem(0.8)};
  padding-right: ${rem(0.8)};
`;

export const StyledButtonWrapper = Styled(Container)`
  padding-bottom: ${rem(1)};
  button {
    width: auto !important;
    min-width: auto;
    padding: ${rem(0, 2)} !important;
  }
`;

export const StyledIconCol = Styled(Col)`
  > div {
    background: ${color('blue', 'bright')};
    width:${rem(6)};
    height: ${rem(6)};
    overflow: hidden;
    svg {
      width: ${rem(3.5)};
      height: ${rem(3.5)};
      color: ${color('blue', 'normal')};
    }
  }
`;

export const StyledContentCol = Styled(Col)`
  margin-top: ${rem(0.8)};
  strong {
    color: ${color('gray', 'dark')};
  }
  p {
    color: ${color('gray', 'normal')};
    font-size: ${rem(1.3)};
  }
`;
