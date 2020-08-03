import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Button from '../index';
// import IconName from '../../../../icons/packages/FontIcons/InfoIcon';

describe('Button ui component tests', () => {
  it('Should render with primary mode and blue color with normal shade and lg size at default', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Button />
      </Wrapper>,
    );

    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: theme.colors.blue.normal,
      color: theme.colors.white,
      height: 'calc(4.5 * 1rem)',
      fontSize: 'calc(1.8 * 1rem)',
      minWidth: 'calc(4.5 * 1rem)',
    });
  });

  it('Should changes the class when get different types of modifier props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Button modifier="outline" />
      </Wrapper>,
    );

    expect(getByTestId('button')).toHaveStyle({
      color: theme.colors.blue.normal,
    });

    rerender(
      <Wrapper>
        <Button modifier="link" />
      </Wrapper>,
    );
    expect(getByTestId('button')).toHaveStyle({
      backgroundColor: '',
      color: theme.colors.blue.normal,
    });
  });

  it('Should changes the class when get different types of size props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Button size="xl" />
      </Wrapper>,
    );

    expect(getByTestId('button')).toHaveStyle({
      height: 'calc(6 * 1rem)',
      fontSize: 'calc(1.8 * 1rem)',
      minWidth: 'calc(6 * 1rem)',
    });

    rerender(
      <Wrapper>
        <Button size="lg" />
      </Wrapper>,
    );
    expect(getByTestId('button')).toHaveStyle({
      height: 'calc(4.5 * 1rem)',
      fontSize: 'calc(1.8 * 1rem)',
      minWidth: 'calc(4.5 * 1rem)',
    });

    rerender(
      <Wrapper>
        <Button size="md" />
      </Wrapper>,
    );
    expect(getByTestId('button')).toHaveStyle({
      height: 'calc(3.5 * 1rem)',
      fontSize: 'calc(1.4 * 1rem)',
      minWidth: 'calc(3.5 * 1rem)',
    });

    rerender(
      <Wrapper>
        <Button size="sm" />
      </Wrapper>,
    );
    expect(getByTestId('button')).toHaveStyle({
      height: 'calc(3 * 1rem)',
      fontSize: 'calc(1.4 * 1rem)',
      minWidth: 'calc(3 * 1rem)',
    });

    rerender(
      <Wrapper>
        <Button size="xs" />
      </Wrapper>,
    );
    expect(getByTestId('button')).toHaveStyle({
      height: 'calc(2.5 * 1rem)',
      fontSize: 'calc(1.2 * 1rem)',
      minWidth: 'calc(2.5 * 1rem)',
    });
  });

  it('Should changes the class when get fullWidth props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Button fullWidth />
      </Wrapper>,
    );

    expect(getByTestId('button')).toHaveStyle({
      minWidth: '100%',
    });
  });

  it('Should changes the class of button when button get direction props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Button direction="right" loading />
      </Wrapper>,
    );

    expect(getByTestId('button')).toHaveStyle({
      flexDirection: 'row',
    });

    rerender(
      <Wrapper>
        <Button direction="left" loading />
      </Wrapper>,
    );

    expect(getByTestId('button')).toHaveStyle({
      flexDirection: 'row-reverse',
    });
  });

  it('Should changes the class of loadingSpinner when button get direction props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Button direction="right" loading />
      </Wrapper>,
    );

    expect(getByTestId('loadingSpinner')).toHaveStyle({
      right: '0',
      marginRight: '2em',
    });

    rerender(
      <Wrapper>
        <Button direction="left" loading />
      </Wrapper>,
    );
    expect(getByTestId('loadingSpinner')).toHaveStyle({
      left: '0',
      marginLeft: '2em',
    });
  });

  it('Should changes the class of buttonLabel when button get direction props', () => {
    const { rerender, getByTestId } = render(
      <Wrapper>
        <Button direction="right" label="label" />
      </Wrapper>,
    );
    expect(getByTestId('buttonLabel')).toHaveClass('mr-1');

    rerender(
      <Wrapper>
        <Button direction="left" label="label" />
      </Wrapper>,
    );
    expect(getByTestId('buttonLabel')).toHaveClass('ml-1');
  });

  it('Should add icon in button when get icon props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Button
          icon={
            <svg height="100" width="100" data-testid="buttonIcon">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="black"
                strokeWidth="3"
                fill="red"
              />
            </svg>
          }
        />
      </Wrapper>,
    );
    const buttonIcon = getByTestId('buttonIcon');

    expect(getByTestId('button')).toContainElement(buttonIcon);
  });

  it('Should add loadingSpinner in button when get loading props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Button loading />
      </Wrapper>,
    );
    const loadingSpinner = getByTestId('loadingSpinner');

    expect(getByTestId('button')).toContainElement(loadingSpinner);
  });

  it('Should add label in button when get label props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Button label="label testing" />
      </Wrapper>,
    );
    const buttonLabel = getByTestId('buttonLabel');

    expect(getByTestId('button')).toContainElement(buttonLabel);
  });

  it('Should add title in button when get title props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Button title="buttonTitle" />
      </Wrapper>,
    );

    expect(getByTestId('button')).toContainHTML('buttonTitle');
  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Button className="my-custom-class" />
      </Wrapper>,
    );
    const button = getByTestId('button');

    expect(button).toHaveClass('my-custom-class');
  });
});
