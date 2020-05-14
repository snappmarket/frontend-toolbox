import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
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

  it('Should render empty div when data is []', () => {
    const mockData = [];
    const { getByTestId } = render(
      <Wrapper><Breadcrumb items={mockData}/></Wrapper>,
    );
    expect(getByTestId('breadcrumb')).toContainHTML('');
  });

  it('Should render breadcrumb with link', () => {
    const mockData = [
      {
        title: 'product-1',
        link: '/product-1'
      },
    ];
    const { getByTestId } = render(
      <BrowserRouter><Wrapper><Breadcrumb items={mockData}/></Wrapper></BrowserRouter>
    );
    const breadcrumbLink = getByTestId('breadcrumbLink');

    expect(getByTestId('breadcrumb')).toContainElement(breadcrumbLink);
  });

  it('Should render breadcrumb without link', () => {
    const mockData = [
      {
        title: <span>test</span>,
      },
    ];
    const { getByTestId } = render(
      <Wrapper><Breadcrumb items={mockData}/></Wrapper>
    );

    expect(getByTestId('breadcrumb')).toContainHTML('<span>test</span>');
  });

  it('Should render without svg icon for Breadcrumb items', () => {

    const mockData = [
      {
        title: 'product-1',
        link: '/product-1'
      },
    ];

    expect(lengthOfAllSvg(mockData)).toBe(0);
    
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

describe('Breadcrumb ui component tests', () => {
  it('Should render with primary mode and blue color with normal shade and lg size at default', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Breadcrumb />
      </Wrapper>,
    );

    expect(getByTestId('breadcrumb')).toHaveStyle({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'center',
      backgroundColor:  theme.colors.white,
      borderRadius: 'calc(1rem * 0.2)',
      fontSize: 'calc(1rem * 1.5)',
    });

  });
});
