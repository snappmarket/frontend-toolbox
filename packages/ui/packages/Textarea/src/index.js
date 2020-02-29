import * as React from 'react';
import PropTypes from 'prop-types';

import {
  StyledTextareaWrapper,
  StyledTextarea,
  StyledLabel,
  StyledStar,
  StyledMessage,
} from './styles';

const Textarea = React.forwardRef((props, ref) => {
  const {
    status, message, label, required, id, ...rest
  } = props;
  return (
    <StyledTextareaWrapper>
      {label && id && (
        <StyledLabel htmlFor={id}>
          {label}
          {' '}
          {required && <StyledStar>*</StyledStar>}
        </StyledLabel>
      )}
      <StyledTextarea status={status} ref={ref} id={id} {...rest} />
      {Object.keys(message).length > 0 && (
        <StyledMessage type={message.type}>{message.content}</StyledMessage>
      )}
    </StyledTextareaWrapper>
  );
});

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  status: PropTypes.oneOf(['gray', 'red', 'blue', 'orange', 'green', 'yellow']),
  value: PropTypes.any,
  placeholder: PropTypes.any,
  className: PropTypes.string,
  message: PropTypes.object,
  onChange: PropTypes.func,
  Children: PropTypes.string,
  required: PropTypes.bool,
};

Textarea.defaultProps = {
  status: 'gray',
  id: '',
  label: '',
  message: {},
  required: false,
};

export default Textarea;
