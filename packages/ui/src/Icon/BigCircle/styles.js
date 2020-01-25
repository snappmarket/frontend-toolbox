import Styled from 'styled-components';

export const StyledBigCircle = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: calc(${props => props.theme.defaultRem} * 11);
  height: calc(${props => props.theme.defaultRem} * 11);
  box-shadow: 0 calc(${props => props.theme.defaultRem} * 0.3) calc(${props =>
  props.theme.defaultRem} * 1.6) 0 rgba(0, 0, 0, 0.16);
  background-image: ${props =>
    props.type === 'green'
      ? 'linear-gradient(228deg, #10e02c 19%, #07bc20 100%);'
      : 'linear-gradient(46deg, #ff3643 19%, #ff6973 100%);'}; 
`;

export const StyledBigCircleHolder = Styled.section`
  h4 {
    margin-top: calc(${props => props.theme.defaultRem} * 4);;
    margin-bottom: calc(${props => props.theme.defaultRem} * 4);;
    font-size: calc(${props => props.theme.defaultRem} * 1.6);
    color: ${props => (props.type === 'green' ? '#07bc20' : '#ff6973')}; 
  }
`;
