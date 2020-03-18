import React from 'react';
import ReactDOM from 'react-dom';
import * as UiComponents from '../packages/index';
import { Wrapper } from './test.helpers';

// RENDER TEST
describe('UI components render test : ', () => {
  const EXCLUDED_PACKAGES = [
    'makeTheme',
    'Carousel',
    'Tab',
    'TabPanel',
    'TabSwitcher',
    'JsonLD',
    'Image',
    'Grid',
    'InputRange',
    'Pagination',
    'TextWrap',
    'Accordion',
    'AccordionContent',
    'AccordionHead',
    'Tooltip',
  ];

  /**
   * Loop on all ui components and test them
   */
  Object.keys(UiComponents).forEach(uiComponent => {
    if (!EXCLUDED_PACKAGES.includes(uiComponent)) {
      it(`should render ${uiComponent} without crashing`, () => {
        const div = document.createElement('div');
        const UiComponent = UiComponents[uiComponent];

        ReactDOM.render(
          <Wrapper>
            <UiComponent />
          </Wrapper>,
          div,
        );
        ReactDOM.unmountComponentAtNode(div);
      });
    }
  });
});
