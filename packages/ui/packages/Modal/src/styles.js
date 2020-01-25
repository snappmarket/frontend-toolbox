import Styled from 'styled-components';
import Button from '../../Button/src';

const StyledModalWrapper = Styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: right;
  overflow-y: auto;
  z-index: 1001;
  padding: calc(${(props) => props.theme.defaultRem} * 4) 0;
`;
const StyledLightBox = Styled(StyledModalWrapper)`
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1002;
`;
const StyledModal = Styled.div`
  margin: 0 auto;
  max-width: calc(100% - calc(${(props) => props.theme.defaultRem} * 2));
  position: relative;
  z-index: 1003;
  background-color: ${(props) => props.theme.colors.white};
  padding: calc(${(props) => props.theme.defaultRem});
  border-radius: calc(${(props) => props.theme.defaultRem} * 0.5);
  width: calc(${(props) => props.theme.defaultRem} * ${(props) => props.width});
  ${(props) => props.position === 'top'
    && `
    top: calc(${props.theme.defaultRem} * 1);
  `}
  ${(props) => props.position === 'center'
    && `
    top:50%;
    transform: translateY(-50%);
  `}
  ${(props) => props.position === 'bottom'
    && `
    top: 100%;
    transform: translateY(calc(-100% - calc(${props.theme.defaultRem} * 1)));
  `}
`;
const StyledCloseModalButton = Styled(Button)`
  position: absolute;
  top: calc(${(props) => props.theme.defaultRem} * 0.8);
  left: calc(${(props) => props.theme.defaultRem} * 0.8);
`;
const StyledModalHeader = Styled.header`
  border-bottom: solid calc(${(props) => props.theme.defaultRem} * 0.1) ${(props) => props.theme.colors.gray.bright};
  padding-bottom: calc(${(props) => props.theme.defaultRem});
  margin-bottom: calc(${(props) => props.theme.defaultRem});
  h3 {
    font-size: calc(${(props) => props.theme.defaultRem} * 1.6);
  }
`;
const StyledModalContent = Styled.main``;
const StyledModalFooter = Styled.footer`
  border-top: solid calc(${(props) => props.theme.defaultRem} * 0.1) ${(props) => props.theme.colors.gray['ultra-light']};
  padding-top: calc(${(props) => props.theme.defaultRem});
  margin-top: calc(${(props) => props.theme.defaultRem});
 `;

export {
  StyledModalWrapper,
  StyledLightBox,
  StyledModal,
  StyledCloseModalButton,
  StyledModalHeader,
  StyledModalContent,
  StyledModalFooter,
};
