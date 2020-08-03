import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Select from '../index';

describe('Select ui component tests', () => {
  const statuses = [
    {
      key: 'order',
      title: 'order',
      value: 'ORDER',
    },
    {
      key: 'payment',
      title: 'payment',
      value: 'PAYMENT',
    },
    {
      key: 'voucherCode',
      title: 'vocher code',
      value: 'VOUCHER_CODE',
    },
    {
      key: 'technicalProblems',
      title: 'technical Problems',
      value: 'TECHNICAL_PROBLEMS',
    },
    {
      key: 'others',
      title: 'others',
      value: 'OTHERS',
    },
  ];
  it('Should set id when get id props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Select className="selectClass" options={statuses} />
      </Wrapper>,
    );

    expect(
      getByTestId('selectIconWrapper').classList.contains('selectClass'),
    ).toBe(true);
  });

  it('Should not set id and label should have empty htmlFor attribute', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Select options={statuses} label="foo" />
      </Wrapper>,
    );

    expect(getByTestId('selectLabel')).toHaveAttribute('for', '');
  });

  it('Should add label in select when get label props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Select options={statuses} label="input caption" />
      </Wrapper>,
    );
    const selectLabel = getByTestId('selectLabel');

    expect(getByTestId('selectWrapper')).toContainElement(selectLabel);
  });
  //
  it('Should add required flag in input when get required props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Select label="input caption" options={statuses} required />
      </Wrapper>,
    );
    const labelRequiredFlag = getByTestId('labelRequiredFlag');

    expect(getByTestId('selectLabel')).toContainElement(labelRequiredFlag);
  });
  it('Should add success message below the select when it gets a message prop', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Select
          options={statuses}
          message={{ type: 'success', message: 'this is a success message' }}
        />
      </Wrapper>,
    );
    const messageWrapper = getByTestId('selectMessages');

    expect(getByTestId('selectWrapper')).toContainElement(messageWrapper);
    expect(messageWrapper).toHaveStyle(`color: ${theme.colors.green.normal}`);
  });

  it('Should add error message below the select when it gets a message prop', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Select
          options={statuses}
          message={{ type: 'danger', message: 'this is a error message' }}
        />
      </Wrapper>,
    );
    const messageWrapper = getByTestId('selectMessages');

    expect(getByTestId('selectWrapper')).toContainElement(messageWrapper);
    expect(messageWrapper).toHaveStyle(`color: ${theme.colors.red.normal}`);
  });

  it('Should set value in select when get value props and call onChange callback when get onChange props', () => {
    const callback = jest.fn();
    const { getByTestId } = render(
      <Wrapper>
        <Select
          label="select caption"
          onChange={callback}
          options={statuses}
        />
      </Wrapper>,
    );
    expect(getByTestId('selectId').value).toBe('ORDER');
    expect(callback).toHaveBeenCalledTimes(0);
  });

});
