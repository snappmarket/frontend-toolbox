import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Label from '../index';

describe('Label ui component tests', () => {
  it('Should render with primary type and blue color at default', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Label />
      </Wrapper>,
    );

    expect(getByTestId('label')).toHaveStyle({
      backgroundColor: theme.colors.blue.normal,
      color: theme.colors.white,
    });
  });

  it('Should changes the class when get different colors and type props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Label type="material" color="gray" />
      </Wrapper>,
    );

    expect(getByTestId('label')).toHaveStyle({
      backgroundColor: theme.colors.gray.bright,
      color: theme.colors.gray.normal,
    });

    rerender(
      <Wrapper>
        <Label type="outline" color="red" />
      </Wrapper>,
    );
    expect(getByTestId('label')).toHaveStyle({
      backgroundColor: 'transparent',
      color: theme.colors.red.normal,
    });

    rerender(
      <Wrapper>
        <Label type="quiet" color="green" />
      </Wrapper>,
    );
    expect(getByTestId('label')).toHaveStyle({
      backgroundColor: '',
      color: theme.colors.green.normal,
    });
  });
  it('Should changes the class when get fontSize props ', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Label type="quiet" color="gray" fontSize={5} />
      </Wrapper>,
    );

    expect(getByTestId('label')).toHaveStyle({
      fontSize: 'calc(5 * 1rem)',
    });
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Label className="my-custom-class" />
      </Wrapper>,
    );

    expect(getByTestId('label')).toHaveClass('my-custom-class');
  });

  it('Should test the border and border radius of label', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Label hasBorder={false} radius="10px" />
      </Wrapper>,
    );

    expect(getByTestId('label')).toHaveStyle({
      borderRadius: '10px',
    });
  });
});
