import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Alert from '../index';


describe('Alert ui component tests', () => {
  it('Should render with orange color at default', () => {
    const { queryByTestId } = render(
      <Wrapper><Alert data-testid="alert-default-value"><h3>some text !</h3></Alert></Wrapper>,
    );

    expect(queryByTestId('alert-default-value')).toHaveStyle({
      backgroundColor: theme.colors.orange.bright,
      color: theme.colors.orange.dark,
    });
  });

  it('Should changes the class when get different props', () => {
    const { queryByTestId, rerender } = render(
      <Wrapper><Alert data-testid="alert" status="error"><h3>some text !</h3></Alert></Wrapper>,
    );

    expect(queryByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.red.bright,
      color: theme.colors.red.dark,
    });

    rerender(<Wrapper><Alert data-testid="alert" status="info"><h3>some text !</h3></Alert></Wrapper>);
    expect(queryByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.blue.bright,
      color: theme.colors.blue.dark,
    });

    rerender(<Wrapper><Alert data-testid="alert" status="warning"><h3>some text !</h3></Alert></Wrapper>);
    expect(queryByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.yellow.bright,
      color: theme.colors.yellow.dark,
    });

    rerender(<Wrapper><Alert data-testid="alert" status="success"><h3>some text !</h3></Alert></Wrapper>);
    expect(queryByTestId('alert')).toHaveStyle({
      backgroundColor: theme.colors.green.bright,
      color: theme.colors.green.dark,
    });
  });

  it('Should close Alert on close button click', () => {
    const { queryByTestId } = render(
      <Wrapper><Alert data-testid="alert" status="error" closable="true"><h3>some text !</h3></Alert></Wrapper>,
    );

    fireEvent(queryByTestId('close-button'), 'click');
    expect(queryByTestId('alert')).not.toBeVisible();
  });
});
