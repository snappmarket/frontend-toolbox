import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';

import InputRange from '../index';

describe('InputRange ui component tests', () => {
  it('Should render inputRange when get value and rangeValue props', () => {
    const value = { min: 4, max: 6 };
    const rangeValue = { min: 2, max: 8 };
    const { getByTestId } = render(
      <Wrapper>
        <InputRange value={value} rangeValue={rangeValue} />
      </Wrapper>,
    );
    const inputRange = getByTestId('inputRange');
    expect(getByTestId('inputRangeWrapper')).toContainElement(inputRange);
  });

  it('Should render inputRange when get onChange props', () => {
    const callback = jest.fn();
    const value = { min: 4, max: 6 };
    const rangeValue = { min: 2, max: 8 };
    const { getByTestId } = render(
      <Wrapper>
        <InputRange value={value} rangeValue={rangeValue} onChange={callback} />
      </Wrapper>,
    );
    const inputRange = getByTestId('inputRange');
    expect(getByTestId('inputRangeWrapper')).toContainElement(inputRange);

    // fireEvent.click(getByTestId('inputRange'));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('Should render inputRangeLabel ', () => {
    const value = { min: 4, max: 6 };
    const rangeValue = { min: 2, max: 8 };
    const { rerender, getByTestId } = render(
      <Wrapper>
        <InputRange value={value} rangeValue={rangeValue} />
      </Wrapper>,
    );
    const inputRangeLabel = getByTestId('inputRangeLabel');
    expect(getByTestId('inputRangeWrapper')).toContainElement(inputRangeLabel);

    rerender(
      <Wrapper>
        <InputRange value={value} rangeValue={rangeValue}>
          <span>{value.min}</span>
          <span>{value.max}</span>
        </InputRange>
      </Wrapper>,
    );
    const inputRangeLabelItem = getByTestId('inputRangeLabelItem');

    expect(getByTestId('inputRangeLabel')).toContainElement(
      inputRangeLabelItem,
    );
  });
  it('Should render LTR inputRange', () => {
    const value = { min: 4, max: 6 };
    const rangeValue = { min: 2, max: 8 };
    const { getByTestId } = render(
      <Wrapper>
        <InputRange value={value} rangeValue={rangeValue} rtl={false} />
      </Wrapper>,
    );
    const inputRangeLabel = getByTestId('inputRangeLabel');
    expect(inputRangeLabel).toHaveStyle("direction: ltr");
  });
});
