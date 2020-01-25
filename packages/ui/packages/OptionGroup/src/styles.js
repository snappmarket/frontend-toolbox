import Styled from 'styled-components';

const StyledOptionGroup = Styled.div`
  width: 100%;
`;

const StyledOptionItem = Styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  &:not(:first-child) {
    margin-top:calc(${(props) => props.theme.defaultRem});
  }
  > span {
    width: 100%;
  }
`;

export { StyledOptionGroup, StyledOptionItem };
