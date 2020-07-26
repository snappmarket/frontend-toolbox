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
  const { className, status, message, label, required, onChange, ...rest } = props;
  return (
    <StyledTextareaWrapper className={className} data-testid="textareaWrapper">
      {label && (
        <StyledLabel data-testid="textareaLabel" htmlFor={rest.id || ''}>
          {label} {required && <StyledStar data-testid="textareaLabelRequired">*</StyledStar>}
        </StyledLabel>
      )}
      <StyledTextarea data-testid="textarea" status={status} ref={ref} onChange={onChange} {...rest} />
      {Object.keys(message).length > 0 && (
        <StyledMessage data-testid="textareaMessage" type={message.type}>{message.content}</StyledMessage>
      )}
    </StyledTextareaWrapper>
  );
});

Textarea.propTypes = {
  label: PropTypes.string,
  status: PropTypes.oneOf(['gray', 'red', 'blue', 'orange', 'green', 'yellow']),
  value: PropTypes.any,
  placeholder: PropTypes.any,
  className: PropTypes.string,
  message: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'danger']),
    content: PropTypes.string,
  }),
  onChange: PropTypes.func,
  children: PropTypes.string,
  required: PropTypes.bool,
};

Textarea.defaultProps = {
  status: 'gray',
  label: '',
  message: {},
  required: false,
  onChange: f => f,
};

export default Textarea;
