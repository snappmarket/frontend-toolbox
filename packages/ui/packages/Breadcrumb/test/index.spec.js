import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Breadcrumb from '../index';

describe('Should add class to element ', () => {
  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper><Breadcrumb className="my-custom-class" /></Wrapper>,
    );
    expect(getByTestId('breadcrumb')).toHaveClass('my-custom-class');
  });
});


describe('Should handle items', () => {

  const renderByContainer = data => {
    const { container } = render(
      <BrowserRouter>
        <Wrapper><Breadcrumb items={data} /></Wrapper>
      </BrowserRouter>,
    );
    return container;
  };

  const lengthOfAllSvg = data => {
    const selectAllSvg = renderByContainer(data).querySelectorAll('svg');
    return Object.keys(selectAllSvg).length;
  };

  it('Should create a link without svg icon for Breadcrumb items', () => {

    const mockData = [
      {
        link: '/product-1',
        title: 'product-1',
      },
    ];

    expect(lengthOfAllSvg(mockData)).toBe(0);
    expect(renderByContainer(mockData)).toContainHTML('<a href="/product-1">product-1</a>');
  });

  it('Should render 2 svg arrow icon for 3 items in Breadcrumb ', () => {
    const mockData = [
      {
        link: '/product-1',
        title: 'product-1',
      },
      {
        link: '/product-2',
        title: 'product-2',
      },
      {
        link: '/product-3',
        title: 'product-3',
      },
    ];
    expect(lengthOfAllSvg(mockData)).toBe(2);
  });
});
