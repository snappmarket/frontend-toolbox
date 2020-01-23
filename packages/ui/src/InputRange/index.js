import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactInputRange from 'react-hgs-input-range';
import 'resources/styles/react-hgs-input-range.css';

import defaultMessages from '../../../constants/Messages/general.messages';
import { currencyPrice } from '../../../constants/Helpers/numberHelpers';
import {
  StyledInputRangeWrapper,
  StyledRangeLabelWrapper,
  StyledInputRange,
} from './styles';

const InputRange = props => {
  const { value: initialValue, rangeValue, onChangeComplete } = props;
  const { min: initialMin, max: initialMax } = rangeValue;
  const [value, setValue] = useState(initialValue);
  const { min, max } = value;

  return (
    <StyledInputRangeWrapper>
      <StyledInputRange>
        <ReactInputRange
          minValue={initialMin}
          value={value}
          maxValue={initialMax}
          onChange={setValue}
          onChangeComplete={onChangeComplete}
          formatLabel={() => false}
          rtl
        />
      </StyledInputRange>
      <StyledRangeLabelWrapper className="justify-between">
        <span className="text-center">
          {defaultMessages.filter.range.from} {currencyPrice(min)}
        </span>
        <span className="text-center">
          {defaultMessages.filter.range.to} {currencyPrice(max)}
        </span>
      </StyledRangeLabelWrapper>
    </StyledInputRangeWrapper>
  );
};

InputRange.propTypes = {
  onChangeComplete: PropTypes.func,
  rangeValue: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  value: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
};
InputRange.defaultProps = {
  onChangeComplete: () => {},
  rangeValue: {
    min: 0,
    max: 0,
  },
  value: {
    min: 0,
    max: 0,
  },
};
export default InputRange;
