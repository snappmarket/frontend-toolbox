import styled from 'styled-components';

export const StyledIcon = styled.i`
  font-size: ${props => `calc(${props.theme.defaultRem} * ${props.size})`};
`;
