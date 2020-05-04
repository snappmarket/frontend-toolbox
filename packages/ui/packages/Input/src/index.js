import * as React from 'react';
import PropTypes from 'prop-types';
import {
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledStar,
  StyledMessage,
} from './styles';

const Input = React.forwardRef((props, ref) => {
  const { status, message, label, required, className, ...rest } = props;
  return (
    <StyledInputWrapper data-testid="inputWrapper">
      {label && (
        <StyledLabel data-testid="inputLabel" htmlFor={rest.id || ''}>
          {label}
          {' '}
          {required && <StyledStar data-testid="labelRequiredFlag">*</StyledStar>}
        </StyledLabel>
      )}
      <StyledInput
        data-testid="input"
        className={className}
        status={status}
        ref={ref}
        {...rest}
      />
      {Object.keys(message).length > 0 && (
        <StyledMessage data-testid="inputMessages" type={message.type}>{message.content}</StyledMessage>
      )}
    </StyledInputWrapper>
  );
});

Input.propTypes = {
  label: PropTypes.string,
  status: PropTypes.oneOf(['gray', 'red', 'blue', 'orange', 'green', 'yellow']),
  value: PropTypes.any,
  placeholder: PropTypes.any,
  message: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'danger']),
    content: PropTypes.string,
  }),
  className: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Input.defaultProps = {
  label: '',
  status: 'gray',
  required: false,
  message: {},
};

export default Input;
