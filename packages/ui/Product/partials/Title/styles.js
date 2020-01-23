import Styled from 'styled-components';

export const StyledTitleWrapper = Styled.section`
  h4 {
    font-size: calc(${props => props.theme.defaultRem} * 1.4);
    font-weight: normal;
  }
`;

export const StyledAdditionalComponent = Styled.div``;
