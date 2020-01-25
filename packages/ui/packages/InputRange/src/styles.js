import Styled from 'styled-components';
const StyledInputRangeWrapper = Styled.div``;
const StyledInputRange = Styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 0;
  transform: translateY(-60%);
  .input-range__slider {
    border-color: ${(props) => props.theme.colors.blue.normal};
  }
  .input-range__slider, .input-range__track--active {
    background-color: ${(props) => props.theme.colors.blue.normal};
  }
`;

const StyledRangeLabelWrapper = Styled.div`
  font-size: calc(${(props) => props.theme.defaultRem} * 1);
  margin-top: calc(${(props) => props.theme.defaultRem} * 2.4);
  > span{
    font-size: calc(${(props) => props.theme.defaultRem} * 1.4);
    color: ${(props) => props.theme.colors.gray.dark};
  }
`;
export { StyledInputRangeWrapper, StyledRangeLabelWrapper, StyledInputRange };
