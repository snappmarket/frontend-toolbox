import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import * as A from '../index';

/**
 * Tabs components
 */
const AccordionComponent = (onOpen = f => f, onClose = f => f) => (
  <Wrapper>
    <A.Accordion
      data-testid="accordionSwitcher"
      initialAccordion="accordion-1"
      onOpen={onOpen}
      onClose={onClose}
    >
      <A.AccordionHead
        id="accordion-1"
        className="my-custom-class"
        data-testid="accordion-1"
      >
        Accordion head 1
      </A.AccordionHead>
      <A.AccordionHead
        id="accordion-2"
        data-testid="accordion-2"
      >
        Accordion head 2
      </A.AccordionHead>

      <A.AccordionContent
        data-testid="accordionPanel-1"
        className="my-custom-class" whenActive="accordion-1">
        Accordion panel 1
      </A.AccordionContent>
      <A.AccordionContent data-testid="accordionPanel-2" whenActive="accordion-2">
        Accordion panel 2
      </A.AccordionContent>
    </A.Accordion>
  </Wrapper>
);

describe('Accordion ui component tests', () => {
  it('Should call onOpen and onClose callback to change accordion', () => {
    const onOpenCb = jest.fn();
    const onCloseCb = jest.fn();
    const { getByTestId } = render(AccordionComponent(onOpenCb, onCloseCb));

    fireEvent.click(getByTestId('accordion-2'));
    expect(onCloseCb).toHaveBeenCalledTimes(1);

    // fireEvent.click(getByTestId('accordion-1'));
    // expect(onOpenCb).toHaveBeenCalledTimes(1);
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(AccordionComponent());
    expect(getByTestId('accordion-1')).toHaveClass('my-custom-class');
    expect(getByTestId('accordionPanel-1')).toHaveClass('my-custom-class');
  });

  test('should have default prop functions', () => {
    expect(A.Accordion.defaultProps.onClose).toBeDefined();
    expect(A.Accordion.defaultProps.onOpen).toBeDefined();

    expect(typeof A.Accordion.defaultProps.onClose).toBe('function');
    expect(typeof A.Accordion.defaultProps.onOpen).toBe('function');
  });

  it('Should import exported module', () => {
    expect(A).toHaveProperty('Accordion');
    expect(A).toHaveProperty('AccordionHead');
    expect(A).toHaveProperty('AccordionContent');
  });

  it('Should show accordion panel on click Tab', () => {
    const { getByTestId } = render(AccordionComponent());
    const accordionSwitcher = getByTestId('accordionSwitcher');

    fireEvent.click(getByTestId('accordion-1'));
    expect(accordionSwitcher).toContainElement(getByTestId('accordionPanel-1'));

    fireEvent.click(getByTestId('accordion-2'));
    expect(accordionSwitcher).toContainElement(getByTestId('accordionPanel-2'));
  });
});
