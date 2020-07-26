import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Textarea from '../index';

describe('Textarea ui component tests', () => {
  describe('Textarea render tests', () => {
    it('should render the textarea component', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Textarea />
        </Wrapper>
      );
      expect(getByTestId('textarea')).toBeTruthy();
    });
    it('should render the textarea component with label and required sign', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Textarea label="this is a label" required />
        </Wrapper>
      );
      expect(getByTestId('textareaWrapper')).toContainElement(getByTestId('textareaLabel'));
      expect(getByTestId('textareaLabel')).toContainElement(getByTestId('textareaLabelRequired'));
    });
    it('should render the textarea component with a success message', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Textarea
            required
            message={{
              type: 'success',
              content: 'this is a success message',
            }}
          />
        </Wrapper>
      );
      const textareaMessage = getByTestId('textareaMessage');
      expect(getByTestId('textareaWrapper')).toContainElement(textareaMessage);
      expect(textareaMessage).toHaveStyle(`color: ${theme.colors.green.normal}`);
      expect(textareaMessage).toHaveTextContent(`this is a success message`);
    });
    it('should render the textarea component with an error message', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Textarea
            required
            message={{
              type: 'danger',
              content: 'this is an error message',
            }}
          />
        </Wrapper>
      );
      const textareaMessage = getByTestId('textareaMessage');
      expect(getByTestId('textareaWrapper')).toContainElement(textareaMessage);
      expect(textareaMessage).toHaveStyle(`color: ${theme.colors.red.normal}`);
      expect(textareaMessage).toHaveTextContent(`this is an error message`);
    });
  });
  describe('Textarea props tests', () => {
    it('should render the textarea component with an additional classname', () => {
      const { getByTestId } = render(
        <Wrapper>
          <Textarea className="foobar" />
        </Wrapper>
      );
      expect(getByTestId('textareaWrapper')).toHaveClass('foobar');
    });
    it('should call test onChange prop', () => {
      expect(Textarea.defaultProps.onChange("foo")).toEqual('foo')
    });
  });
});
