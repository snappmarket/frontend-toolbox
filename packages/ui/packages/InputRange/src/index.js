import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactInputRange from 'react-hgs-input-range';

import {
  StyledInputRangeWrapper,
  StyledRangeLabelWrapper,
  StyledInputRange,
} from './styles';

const InputRange = props => {
  const {
    value: initialValue,
    rangeValue,
    onChangeComplete,
    fromTitle,
    toTitle,
    rtl,
    className,
    ...rest
  } = props;
  const { min: initialMin, max: initialMax } = rangeValue;
  const [value, setValue] = useState(initialValue);
  const { min, max } = value;

  /**
   * To reset value of range
   */
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <StyledInputRangeWrapper
      className={className}
      data-testid="inputRangeWrapper"
    >
      <StyledInputRange data-testid="inputRange">
        <ReactInputRange
          minValue={initialMin}
          value={value}
          maxValue={initialMax}
          onChange={setValue}
          onChangeComplete={onChangeComplete}
          formatLabel={() => false}
          rtl={rtl}
          {...rest}
        />
      </StyledInputRange>
      <StyledRangeLabelWrapper
        rtl={rtl}
        data-testid="inputRangeLabel"
        className="justify-between"
      >
        <span className="text-center" data-testid="inputRangeLabelItem">
          {fromTitle(min)}
        </span>
        <span className="text-center">{toTitle(max)}</span>
      </StyledRangeLabelWrapper>
    </StyledInputRangeWrapper>
  );
};

InputRange.propTypes = {
  className: PropTypes.string,
  fromTitle: PropTypes.func,
  toTitle: PropTypes.func,
  onChangeComplete: PropTypes.func,
  rtl: PropTypes.bool,
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
  className: '',
  fromTitle: value => `from ${value}`,
  toTitle: value => `to ${value}`,
  onChangeComplete: () => {},
  rtl: true,
  rangeValue: {
    min: 0,
    max: 1,
  },
  value: {
    min: 0,
    max: 1,
  },
};
export default InputRange;
