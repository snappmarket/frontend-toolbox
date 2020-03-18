import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Alert from '../index';

describe('Alert ui component tests', () => {
  it('Should render with orange color at default', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Alert>
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );

    expect(getByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.orange.bright,
      color: theme.colors.orange.dark,
    });
  });

  it('Should changes the class when get different props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Alert status="error">
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );

    expect(getByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.red.bright,
      color: theme.colors.red.dark,
    });

    rerender(
      <Wrapper>
        <Alert status="info">
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );
    expect(getByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.blue.bright,
      color: theme.colors.blue.dark,
    });

    rerender(
      <Wrapper>
        <Alert status="warning">
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );
    expect(getByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.yellow.bright,
      color: theme.colors.yellow.dark,
    });

    rerender(
      <Wrapper>
        <Alert status="success">
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );
    expect(getByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.green.bright,
      color: theme.colors.green.dark,
    });
  });

  it('Should close Alert on close button click', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Alert closable>
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );
    const alert = getByTestId('alert');

    fireEvent.click(getByTestId('close-button'));
    expect(alert).not.toBeInTheDocument();
  });

  it('Should call afterClose callback on close button click', () => {
    // eslint-disable-next-line no-console
    const callback = jest.fn();
    const { getByTestId } = render(
      <Wrapper>
        <Alert onClose={callback} closable>
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );

    fireEvent.click(getByTestId('close-button'));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Alert className="my-custom-class">
          <h3>some text !</h3>
        </Alert>
      </Wrapper>,
    );
    const alert = getByTestId('alert');

    expect(alert).toHaveClass('my-custom-class');
  });
});
