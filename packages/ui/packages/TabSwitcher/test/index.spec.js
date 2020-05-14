import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import * as T from '../index';

/**
 * Tabs components
 */
const TabComponent = (onChangeTab = f => f, onSwitch = f => f) => (
  <Wrapper>
    <T.TabSwitcher
      onSwitch={onSwitch}
      data-testid="tabSwitcher"
      initialTab="tab-1"
    >
      <T.Tab
        id="tab-1"
        className="my-custom-class"
        data-testid="tab-1"
        onChangeTab={onChangeTab}
      >
        Tab 1
      </T.Tab>
      <T.Tab id="tab-2" data-testid="tab-2" onChangeTab={onChangeTab}>
        Tab 2
      </T.Tab>

      <T.TabPanel data-testid="tabPanel-1" whenActive="tab-1">
        Tab panel 1
      </T.TabPanel>
      <T.TabPanel data-testid="tabPanel-2" whenActive="tab-2">
        Tab panel 2
      </T.TabPanel>
    </T.TabSwitcher>
  </Wrapper>
);

describe('Tab switcher ui component tests', () => {
  it('Should call onChangeTab callback to change tab', () => {
    const callback = jest.fn();
    const { getByTestId } = render(TabComponent(callback, f => f));

    fireEvent.click(getByTestId('tab-2'));
    expect(callback).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId('tab-1'));
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('Should call onSwitch when an update happens', () => {
    const callback = jest.fn();
    const { getByTestId } = render(TabComponent(f => f, callback));

    fireEvent.click(getByTestId('tab-2'));
    expect(callback).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId('tab-1'));
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(TabComponent());
    expect(getByTestId('tab-1')).toHaveClass('my-custom-class');
  });

  test('should have default prop functions', () => {
    expect(T.Tab.defaultProps.onChangeTab).toBeDefined();
    expect(T.TabSwitcher.defaultProps.onSwitch).toBeDefined();

    expect(typeof T.Tab.defaultProps.onChangeTab).toBe('function');
    expect(typeof T.TabSwitcher.defaultProps.onSwitch).toBe('function');
  });

  it('Should import exported module', () => {
    expect(T).toHaveProperty('Tab');
    expect(T).toHaveProperty('TabPanel');
    expect(T).toHaveProperty('TabSwitcher');
  });

  it('Should show tab panel on click Tab', () => {
    const { getByTestId } = render(TabComponent());
    const tabSwitcher = getByTestId('tabSwitcher');

    fireEvent.click(getByTestId('tab-1'));
    expect(tabSwitcher).toContainElement(getByTestId('tabPanel-1'));

    fireEvent.click(getByTestId('tab-2'));
    expect(tabSwitcher).toContainElement(getByTestId('tabPanel-2'));
  });

  it('Should test the callback of tab and tab switch', () => {
    expect(T.TabSwitcher.defaultProps.onSwitch('foo')).toBe('foo');
    expect(T.Tab.defaultProps.onChangeTab('foo')).toBe('foo');
  });
});
