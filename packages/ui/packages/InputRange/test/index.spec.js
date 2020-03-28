import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';


import InputRange from '../index';


describe('InputRange ui component tests', () => {
  it('Should render inputRange when get value and rangeValue props', () => {
    const { getByTestId } = render(
      <Wrapper><InputRange value={value} rangeValue={rangeValue} /></Wrapper>,
    );
    const value = {min : 4, max: 8}
    const rangeValue = {min : 2, max: 4}
    const inputRange = getByTestId('inputRange');
    expect(getByTestId('inputRangeWrapper')).toContainElement(inputRange)
  });

  it('Should render inputRange when get onChange props', () => {
    const callback = jest.fn();
    const { getByTestId } = render(
      <Wrapper><InputRange value={value} rangeValue={rangeValue} onChange={callback} /></Wrapper>,
    );
    const value = {min : 4, max: 8}
    const rangeValue = {min : 2, max: 4}
    const inputRange = getByTestId('inputRange');
    expect(getByTestId('inputRangeWrapper')).toContainElement(inputRange);

    // fireEvent.click(getByTestId('inputRange'));
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('Should render inputRangeLabel ', () => {
    const { rerender, getByTestId } = render(
      <Wrapper><InputRange value={value} rangeValue={rangeValue} /></Wrapper>,
    );
    const value = {min : 4, max: 8};
    const rangeValue = {min : 10, max: 20};
    const inputRangeLabel = getByTestId('inputRangeLabel');
    expect(getByTestId('inputRangeWrapper')).toContainElement(inputRangeLabel)

    rerender(<Wrapper><InputRange value={value} rangeValue={rangeValue} ><span>{value.min}</span><span>{value.max}</span></InputRange></Wrapper>)
    const inputRangeLabelItem = getByTestId('inputRangeLabelItem');

    expect(getByTestId('inputRangeLabel')).toContainElement(inputRangeLabelItem)

  });

  
});
