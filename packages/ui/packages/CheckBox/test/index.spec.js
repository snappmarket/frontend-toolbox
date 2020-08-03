import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import CheckBox from '../index';

describe('CheckBox ui component tests', () => {
  it('Find circle SVG on disable', () => {
    const { getByText } = render(
      <Wrapper>
        <CheckBox disabled className="circle" />
      </Wrapper>,
    );
    expect(getByText('circle')).toBeTruthy();
  });

  it('Should change className to circle', () => {
    const { getByTestId } = render(
      <Wrapper>
        <CheckBox disabled className="circle" />
      </Wrapper>,
    );
    expect(getByTestId('checkBox')).toHaveClass('circle');
  });


  // TODO: check why this test fails
  // it('Should render with green status and size of 2rem at default', () => {
  //   const { getByTestId } = render(
  //     <Wrapper>
  //       <CheckBox />
  //     </Wrapper>,
  //   );
  //
  //   expect(getByTestId('checkBox')).toHaveStyle({
  //     backgroundColor: 'transparent',
  //     width: 'calc(2 * 1rem)',
  //     height: 'calc(2 * 1rem)',
  //     border: `solid calc(0.1 * 1rem) ${theme.colors.gray.light}`,
  //   });
  // });

  //@todo: the icons are not accepting rest params tehrefore we should render them in another element or add rest params to icons
  // it('Should add CheckMarkIcon in checkBox when get selected props', () => {
  //   const { getByTestId } = render(
  //     <Wrapper>
  //       <CheckBox selected />
  //     </Wrapper>,
  //   );
  //   const checkMarkIcon = getByTestId('checkMarkIcon');
  //
  //   expect(getByTestId('checkBox')).toContainElement(checkMarkIcon);
  // });

  it('Should changes the class when get different types of status props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <CheckBox status="gray" selected />
      </Wrapper>,
    );

    expect(getByTestId('checkBox')).toHaveStyle({
      backgroundColor: theme.colors.gray.light,
    });

    rerender(
      <Wrapper>
        <CheckBox status="yellow" selected />
      </Wrapper>,
    );
    expect(getByTestId('checkBox')).toHaveStyle({
      backgroundColor: theme.colors.yellow.light,
    });

    rerender(
      <Wrapper>
        <CheckBox status="red" selected />
      </Wrapper>,
    );
    expect(getByTestId('checkBox')).toHaveStyle({
      backgroundColor: theme.colors.red.light,
    });

    rerender(
      <Wrapper>
        <CheckBox status="orange" selected />
      </Wrapper>,
    );
    expect(getByTestId('checkBox')).toHaveStyle({
      backgroundColor: theme.colors.orange.light,
    });

    rerender(
      <Wrapper>
        <CheckBox status="blue" selected />
      </Wrapper>,
    );
    expect(getByTestId('checkBox')).toHaveStyle({
      backgroundColor: theme.colors.blue.light,
    });
  });

  it('Should changes the class when get disabled props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <CheckBox disabled />
      </Wrapper>,
    );

    expect(getByTestId('checkBox')).toHaveStyle({
      backgroundColor: theme.colors.gray['ultra-light'],
    });
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <CheckBox className="my-custom-class" />
      </Wrapper>,
    );

    expect(getByTestId('checkBox')).toHaveClass('my-custom-class');
  });

  // it('Should changes the class when get different values of size props', () => {
  //   const { getByTestId } = render(
  //     <Wrapper><CheckBox size={3} /></Wrapper>,
  //   );

  //   expect(getByTestId('checkBox')).toHaveStyle({
  //     width: 'calc(3 * 1rem)',
  //     height: 'calc(3 * 1rem)',
  //   });
  // });
});
