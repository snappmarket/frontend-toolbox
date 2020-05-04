// eslint-disable-next-line import/no-named-default
import { default as Styled } from 'styled-components';
const StyledTextWrap = Styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  height: ${props => props.height}px;
`;

export { StyledTextWrap };
