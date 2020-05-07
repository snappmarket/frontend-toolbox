import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import * as A from '../index';

/**
 * Tabs components
 */
const AccordionComponent = (props = {}) => {
  const {onOpen, onClose, initialAccordion} = props;
  return (
    <Wrapper>
      <A.Accordion
        data-testid="accordionSwitcher"
        initialAccordion={initialAccordion}
        onOpen={onOpen}
        onClose={onClose}
      >
        <A.AccordionHead
          id="accordion-1"
          className="my-custom-class"
          data-testid="accordionHead-1"
        >
          {(open, close, isOpen) => (
            <h2
              data-testid="accordion-1"
              onClick={() => !isOpen ? open() : close()}
            >
              Accordion head 1
            </h2>
          )}
        </A.AccordionHead>
        <A.AccordionHead id="accordion-2">
          {(open, close, isOpen) => (
            <h2
              data-testid="accordion-2"
              onClick={() => !isOpen ? open() : close()}
            >
              Accordion head 2
            </h2>
          )}
        </A.AccordionHead>

        <A.AccordionContent
          data-testid="accordionPanel-1"
          className="my-custom-class"
          whenActive="accordion-1"
        >
          Accordion panel 1
        </A.AccordionContent>
        <A.AccordionContent
          data-testid="accordionPanel-2"
          whenActive="accordion-2"
        >
          Accordion panel 2
        </A.AccordionContent>
      </A.Accordion>
    </Wrapper>
  );
};

describe('Accordion ui component tests', () => {
  it('Should call onOpen and onClose callback to change accordion', () => {
    const onOpen = jest.fn();
    const onClose = jest.fn();
    const { getByTestId } = render(AccordionComponent({onOpen, onClose}));
    expect(onOpen).toHaveBeenCalledTimes(0);
    expect(onClose).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId('accordion-1'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId('accordion-2'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId('accordion-1'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId('accordion-1'));
    expect(onOpen).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(AccordionComponent({initialAccordion: 'accordion-1'}));
    expect(getByTestId('accordionHead-1')).toHaveClass('my-custom-class');
    expect(getByTestId('accordionPanel-1')).toHaveClass('my-custom-class');
  });

  test('should have default prop functions', () => {
    expect(A.Accordion.defaultProps.onClose).toBeDefined();
    expect(A.Accordion.defaultProps.onOpen).toBeDefined();
    expect(A.Accordion.defaultProps.animate).toBeDefined();
    expect(A.Accordion.defaultProps.initialAccordion).toBeDefined();

    expect(typeof A.Accordion.defaultProps.onClose).toBe('function');
    expect(typeof A.Accordion.defaultProps.onOpen).toBe('function');
    expect(typeof A.Accordion.defaultProps.animate).toBe('boolean');
    expect(typeof A.Accordion.defaultProps.initialAccordion).toBe('string');
  });

  it('Should import exported module', () => {
    expect(A).toHaveProperty('Accordion');
    expect(A).toHaveProperty('AccordionHead');
    expect(A).toHaveProperty('AccordionContent');
  });
  //
  it('Should show accordion panel on click Tab', () => {
    const { getByTestId, queryByTestId } = render(AccordionComponent());
    const accordionSwitcher = getByTestId('accordionSwitcher');

    fireEvent.click(getByTestId('accordion-1'));
    expect(accordionSwitcher).toContainElement(getByTestId('accordionPanel-1'));

    fireEvent.click(getByTestId('accordion-2'));
    expect(accordionSwitcher).toContainElement(getByTestId('accordionPanel-2'));

    fireEvent.click(getByTestId('accordion-2'));
    expect(queryByTestId('accordionPanel-2')).toBeFalsy();
  });
});
