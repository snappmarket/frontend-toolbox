import Styled from 'styled-components';

const StyledLinedText = Styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.colors.gray.dark}
  margin: calc(${props => props.theme.defaultRem} * 0.8) 0px;
  font-size: calc(${props => props.theme.defaultRem} * 1.6);
  &:before,
  &:after {
    content: "";
    flex-grow: 1;
    background: ${props => props.theme.colors.gray['ultra-light']};
    height: calc(${props => props.theme.defaultRem} * 0.1);
    font-size: 0px;
    line-height: 0px;
  }
  &:before {
    margin-left: calc(${props => props.theme.defaultRem} * 2);
  }
  &:after {
    margin-right: calc(${props => props.theme.defaultRem} * 2);
  }
`;

export { StyledLinedText };
