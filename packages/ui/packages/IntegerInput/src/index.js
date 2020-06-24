import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { englishNumber } from '@snappmarket/helpers';
import Input from '../../Input';

const isValid = (value, min, max) =>
  value !== '-' &&
  (min === undefined || value >= min) &&
  (max === undefined || value <= max);

const IntegerInput = ({
  value,
  min,
  max,
  onChange,
  minMessage,
  maxMessage,
  nanMessage,
  placeholder,
  type,
  className,
  pattern = `^-?[0-9]*$`,
}) => {
  const regexp = new RegExp(pattern);
  const [internalValue, setInternalValue] = useState(value);
  const [valid, setValid] = useState(isValid(value, min, max));

  const handleOnChange = event => {
    let validationMessage = '';
    const eventValue = englishNumber(event.target.value) || 0;
    const newValue = parseInt(eventValue, 10);
    if (newValue < min) {
      validationMessage = minMessage;
    }
    if (newValue > max) {
      validationMessage = maxMessage;
    }
    if (newValue === 0 && !valid) {
      validationMessage = nanMessage;
    }
    if (regexp.test(newValue)) {
      const newValid = isValid(newValue, min, max);
      setInternalValue(newValue);
      setValid(newValid);
      onChange({
        value: newValue,
        message: validationMessage,
        valid: newValid,
      });
    }
  };

  return (
    <Input
      autoComplete="off"
      className={className}
      type={type}
      value={internalValue}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

IntegerInput.propTypes = {
  value: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  minMessage: PropTypes.string,
  maxMessage: PropTypes.string,
  nanMessage: PropTypes.string,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};
export default IntegerInput;
