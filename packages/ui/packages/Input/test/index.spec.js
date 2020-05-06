import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Input from '../index';

describe('Input ui component tests', () => {
  it('Should set id when get id props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Input id="inputId" />
      </Wrapper>,
    );

    expect(getByTestId('input')).toHaveAttribute('id', 'inputId');
  });

  it('Should add label in input when get label props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Input label="input caption" id="inputId" />
      </Wrapper>,
    );
    const inputLabel = getByTestId('inputLabel');

    expect(getByTestId('inputWrapper')).toContainElement(inputLabel);
  });

  it('Should add required flag in input when get required props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Input label="input caption" id="inputId" required />
      </Wrapper>,
    );
    const labelRequiredFlag = getByTestId('labelRequiredFlag');

    expect(getByTestId('inputLabel')).toContainElement(labelRequiredFlag);
  });
  it('Should add success message below the input when it gets a message prop', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Input message={{type: 'success', message: 'this is a success message'}} />
      </Wrapper>,
    );
    const messageWrapper = getByTestId('inputMessages');

    expect(getByTestId('inputLabel')).toContainElement(messageWrapper);
    expect(messageWrapper).toHaveStyleRule('green', theme.colors.green.normal);
  });
  it('Should add error message below the input when it gets a message prop', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Input message={{type: 'error', message: 'this is a error message'}} />
      </Wrapper>,
    );
    const messageWrapper = getByTestId('inputMessages');

    expect(getByTestId('inputLabel')).toContainElement(messageWrapper);
    expect(messageWrapper).toHaveStyleRule('green', theme.colors.red.normal);
  });

  it('Should set value in input when get value props and call onChange callback when get onChange props', () => {
    const callback = jest.fn();
    const { getByTestId } = render(
      <Wrapper>
        <Input
          label="input caption"
          id="inputId"
          value="inputValue"
          onChange={callback}
        />
      </Wrapper>,
    );
    expect(getByTestId('input')).toHaveAttribute('value', 'inputValue');
    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('Should add placeholder when get placeholder props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Input placeholder="enter your text here" />
      </Wrapper>,
    );

    expect(getByTestId('input')).toHaveAttribute(
      'placeholder',
      'enter your text here',
    );
  });
});
