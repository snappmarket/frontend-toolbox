import React, {useState} from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { persianNumber } from "@snappmarket/helpers";

import { Wrapper } from '../../../test/test.helpers';
import Pagination from '../index';

describe('Pagination ui component tests', () => {
  describe('Pagination render tests', () => {
    const total = 100;
    const limit = 10;
    const offset = 0;
    it('Should render pagination with all features', () => {
      const { getByTestId, getAllByTestId } = render(
        <Wrapper>
          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPaginate={f => f}
            className="foo"
          />
        </Wrapper>,
      );
      const paginationWrapper = getByTestId('paginationWrapper');
      expect(paginationWrapper).toBeTruthy();
      expect(paginationWrapper).toHaveClass('foo');

      const pages = getAllByTestId('page');
      expect(pages.length).toEqual(Math.ceil(total / limit));
      expect(pages[Math.ceil(offset/limit)]).toHaveClass('active');

      expect(paginationWrapper).toContainElement(getByTestId('firstPage'));
      expect(paginationWrapper).toContainElement(getByTestId('lastPage'));
      expect(paginationWrapper).toContainElement(getByTestId('prevPage'));
      expect(paginationWrapper).toContainElement(getByTestId('nextPage'));
    });
    it('Should render pagination only with page buttons', () => {
      const { getByTestId, queryByTestId } = render(
        <Wrapper>
          <Pagination
            total={total}
            limit={limit}
            offset={offset}
            onPaginate={f => f}
            hasNavigateButtons={false}
            hasSkipButtons={false}
          />
        </Wrapper>,
      );
      expect(getByTestId('paginationWrapper')).toBeTruthy();

      expect(queryByTestId('firstPage')).toBeFalsy();
      expect(queryByTestId('lastPage')).toBeFalsy();
      expect(queryByTestId('prevPage')).toBeFalsy();
      expect(queryByTestId('nextPage')).toBeFalsy();
    });
    it('Should activate related page of given offset', () => {
      const { getAllByTestId } = render(
        <Wrapper>
          <Pagination
            total={total}
            limit={limit}
            offset={51}
            onPaginate={f => f}
          />
        </Wrapper>,
      );
      const pages = getAllByTestId('page');
      expect(pages[6]).toHaveClass('active');
    });
    it('Should activate related page button when page buttons are floating between all pages', () => {
      const threshold = 2;
      const { getAllByTestId } = render(
        <Wrapper>
          <Pagination
            total={total}
            limit={limit}
            offset={60}
            onPaginate={f => f}
            threshold={threshold}
          />
        </Wrapper>,
      );
        const pages = getAllByTestId('page');
        expect(pages.length).toBe(threshold * 2 + 1);
        expect(pages[2]).toHaveClass('active');

        const pageNumbers = getAllByTestId('pageNumber');
        expect(pageNumbers[2]).toHaveTextContent(persianNumber('7'));
    });
    it('Should test start page of page buttons float between range of page buttons', () => {
      const threshold = 3;
      const { getAllByTestId } = render(
        <Wrapper>
          <Pagination
            total={total}
            limit={limit}
            offset={90}
            onPaginate={f => f}
            threshold={threshold}
          />
        </Wrapper>,
      );
        const pages = getAllByTestId('page');
        expect(pages.length).toBe(threshold * 2 + 1);
        expect(pages[6]).toHaveClass('active');

        const pageNumbers = getAllByTestId('pageNumber');
        expect(pageNumbers[0]).toHaveTextContent(persianNumber('4'));
    });
    it('Should not render pagination cause there is no pages to navigate through', () => {
      const { queryByTestId } = render(
        <Wrapper>
          <Pagination
            total={0}
            limit={0}
            offset={0}
            onPaginate={f => f}
          />
        </Wrapper>,
      );
      expect(queryByTestId('paginationWrapper')).toBeFalsy();
    });
  });
  describe('Pagination functionality tests', () => {
    const PaginationComponent = ({ hasNavigateButtons, hasSkipButtons, onPaginate }) => {
      const [offset, setOffset] = useState(0);
      const handlePaginate = offset => {
        setOffset(offset);
        onPaginate(offset);
      }
      return (
        <Pagination
          total={100}
          limit={10}
          offset={offset}
          onPaginate={handlePaginate}
          hasNavigateButtons={hasNavigateButtons}
          hasSkipButtons={hasSkipButtons}
        />
      )
    };
    it('should test click of page buttons', () => {
      const onPaginate = jest.fn(offset => offset);
      const { getAllByTestId } = render(
        <Wrapper>
          <PaginationComponent
            hasSkipButtons={false}
            hasNavigateButtons={false}
            onPaginate={onPaginate}
          />
        </Wrapper>,
      );
      const pages = getAllByTestId('page');

      expect(onPaginate).toHaveBeenCalledTimes(0);
      expect(pages[0]).toHaveClass('active');
      fireEvent.click(pages[0]);
      expect(onPaginate).toHaveBeenCalledTimes(0);
      fireEvent.click(pages[1]);
      expect(onPaginate).toHaveBeenCalledTimes(1);
      expect(pages[1]).toHaveClass('active');
      fireEvent.click(pages[2]);
      expect(onPaginate).toHaveBeenCalledTimes(2);
      expect(pages[2]).toHaveClass('active');
      fireEvent.click(pages[2]);
      expect(onPaginate).toHaveBeenCalledTimes(2);
      expect(pages[2]).toHaveClass('active');
    });
    it('should test click of page navigation and skip buttons', () => {
      const onPaginate = jest.fn(offset => offset);
      const { getByTestId } = render(
        <Wrapper>
          <PaginationComponent
            hasSkipButtons={true}
            hasNavigateButtons={true}
            onPaginate={onPaginate}
          />
        </Wrapper>,
      );
      const firstPage = getByTestId('firstPage');
      const prevPage = getByTestId('prevPage');
      const nextPage = getByTestId('nextPage');
      const lastPage = getByTestId('lastPage');

      expect(onPaginate).toHaveBeenCalledTimes(0);
      fireEvent.click(firstPage);
      expect(onPaginate).toHaveBeenCalledTimes(0);
      fireEvent.click(prevPage);
      expect(onPaginate).toHaveBeenCalledTimes(0);
      fireEvent.click(nextPage);
      expect(onPaginate).toHaveBeenCalledTimes(1);
      fireEvent.click(lastPage);
      expect(onPaginate).toHaveBeenCalledTimes(2);
      fireEvent.click(nextPage);
      expect(onPaginate).toHaveBeenCalledTimes(2);
      fireEvent.click(lastPage);
      expect(onPaginate).toHaveBeenCalledTimes(2);
      fireEvent.click(prevPage);
      expect(onPaginate).toHaveBeenCalledTimes(3);
      fireEvent.click(firstPage);
      expect(onPaginate).toHaveBeenCalledTimes(4);
    });
  });
});
