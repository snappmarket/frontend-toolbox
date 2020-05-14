import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import OptionGroup from '../index';

describe('OptionGroup ui component tests', () => {
  describe('OptionGroup render', () => {
    const options = [
      {title: 'foo', value: 'foo', meta: 'foo meta'},
      {title: 'bar', value: 'bar', meta: 'bar meta'},
    ];
    it('Should test the count of rendered items to be equal to given options', () => {
      const { getAllByTestId } = render(
        <Wrapper>
          <OptionGroup options={options} />
        </Wrapper>,
      );
      const optionItem = getAllByTestId('optionItem');
      expect(optionItem.length).toBe(options.length);
    });
    it('Should not render radio of items', () => {
      const { queryByTestId } = render(
        <Wrapper>
          <OptionGroup options={options} hasRadio={false}/>
        </Wrapper>,
      );
      const itemRadio = queryByTestId('itemRadio');
      expect(itemRadio).toBeFalsy();
    });
    it('Should not render meta of item', () => {
      const { queryByTestId } = render(
        <Wrapper>
          <OptionGroup
            options={[
              { title: 'foo', value: 'foo'},
            ]}
          />
        </Wrapper>,
      );
      const itemMeta = queryByTestId('itemMeta');
      expect(itemMeta).toBeFalsy();
    });
  });
  describe('OptionGroup select tests', () => {
    it('Should select item after click', () => {
      const onSelectItem = jest.fn(value => value);
      const { getByTestId } = render(
        <Wrapper>
          <OptionGroup
            options={[
              { title: 'foo', value: 'foo'},
            ]}
            onSelectItem={onSelectItem}
          />
        </Wrapper>,
      );
      const optionItem = getByTestId('optionItem');
      fireEvent.click(optionItem);
      expect(onSelectItem).toHaveBeenCalledTimes(1);
      expect(onSelectItem).toHaveBeenCalledWith('foo');
    });
    it('Should not select item after click cause it is disabled', () => {
      const onSelectItem = jest.fn(value => value);
      const { getByTestId } = render(
        <Wrapper>
          <OptionGroup
            options={[
              { title: 'bar', value: 'bar', disabled: true },
            ]}
            onSelectItem={onSelectItem}
          />
        </Wrapper>,
      );
      const optionItem = getByTestId('optionItem');
      fireEvent.click(optionItem);
      expect(onSelectItem).toHaveBeenCalledTimes(0);
    });
  });
  describe('OptionGroup props tests', () => {
    it('Should test the given className', () => {
      const { getByTestId } = render(
        <Wrapper>
          <OptionGroup className="foo" />
        </Wrapper>,
      );
      const optionItem = getByTestId('optionGroup');
      expect(optionItem).toHaveClass('foo');
    });
    it('Should test default select item', () => {
      expect(OptionGroup.defaultProps.onSelectItem('foo')).toBe('foo');
    });
  });
});
