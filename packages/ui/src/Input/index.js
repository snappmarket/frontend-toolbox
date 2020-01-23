import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledInputWrapper,
  StyledInput,
  StyledLabel,
  StyledStar,
  StyledMessage,
} from './styles';

const Input = React.forwardRef((props, ref) => {
  const { status, message, label, id, required, className, ...rest } = props;
  return (
    <StyledInputWrapper>
      {label && props.id && (
        <StyledLabel htmlFor={id}>
          {label} {required && <StyledStar>*</StyledStar>}
        </StyledLabel>
      )}
      <StyledInput
        className={className}
        status={status}
        ref={ref}
        id={id}
        {...rest}
      />
      {Object.keys(message).length > 0 && (
        <StyledMessage type={message.type}>{message.content}</StyledMessage>
      )}
    </StyledInputWrapper>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  status: PropTypes.oneOf(['gray', 'red', 'blue', 'orange', 'green', 'yellow']),
  value: PropTypes.any,
  placeholder: PropTypes.any,
  message: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  Children: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Input.defaultProps = {
  id: '',
  label: '',
  status: 'gray',
  required: false,
  message: {},
};

export default Input;
