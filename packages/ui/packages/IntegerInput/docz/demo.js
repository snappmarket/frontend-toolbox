import React, { useState } from 'react';
import { persianNumber } from '@snappmarket/helpers';

import IntegerInput from '..';

const IntegerComponent = () => {
  const [validationMessage, setValidationMessage] = useState('');
  const [customSelected, setCustomSelected] = useState('');
  const [inputValid, setInputValid] = useState(false);

  const handleCreditManualChange = inputValue => {
    const { value, message, valid } = inputValue;
    setCustomSelected(value);
    setInputValid(valid);
    setValidationMessage(message);
  };

  return (
    <div
      style={{
        width: '250px',
      }}
    >
      <strong>Insert Number:</strong>
      <IntegerInput
        className={`text-center ${inputValid ? 'valid' : 'invalid'}`}
        min={1000}
        max={5000000}
        pattern="^-?[0-9]*$"
        type="tel"
        minMessage="min error message"
        maxMessage="max error message"
        nanMessage="please insert number"
        placeholder="please insert number"
        value={persianNumber(customSelected)}
        onChange={inputValue => handleCreditManualChange(inputValue)}
      />
      {!!setValidationMessage && <span>{validationMessage}</span>}
    </div>
  );
};

export default IntegerComponent;
