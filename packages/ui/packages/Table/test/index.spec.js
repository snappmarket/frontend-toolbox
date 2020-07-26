import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import Table from '../index';

describe('Table ui component tests', () => {
  it('Should add class to table wrapper', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Table className="foo" />
      </Wrapper>,
    );
    expect(getByTestId('tableWrapper')).toHaveClass('foo');
  });
  it('Should render the wrappe rof the table but not the content of it', () => {
    const { queryByTestId } = render(
      <Wrapper>
        <Table />
      </Wrapper>,
    );
    expect(queryByTestId('tableWrapper')).toBeTruthy();
    expect(queryByTestId('tableHeader')).toBeFalsy();
    expect(queryByTestId('tableBody')).toBeFalsy();
    expect(queryByTestId('tableFooter')).toBeFalsy();
  });
  it('Should render table with header, data and footer', () => {
    const headers = ['id', 'title', 'description'];
    const data = [
      ["1", 'foo', 'this is the foo'],
      ["2", 'bar', 'this is the bar'],
    ];
    const footers = ['id', 'title', 'description'];
    const { getByTestId, queryAllByTestId } = render(
      <Wrapper>
        <Table headers={headers} data={data} footers={footers} />
      </Wrapper>,
    );
    expect(getByTestId('tableWrapper')).toBeTruthy();
    expect(getByTestId('tableHeader')).toBeTruthy();
    expect(getByTestId('tableBody')).toBeTruthy();
    expect(getByTestId('tableFooter')).toBeTruthy();

    expect(queryAllByTestId('tableHeaderRow').length).toBe(1);
    expect(queryAllByTestId('tableHeaderCol').length).toBe(3);
    expect(queryAllByTestId('tableHeaderCol')[0].innerHTML).toBe(headers[0]);
    expect(queryAllByTestId('tableHeaderCol')[1].innerHTML).toBe(headers[1]);
    expect(queryAllByTestId('tableHeaderCol')[2].innerHTML).toBe(headers[2]);

    expect(queryAllByTestId('tableBodyRow').length).toBe(2);
    expect(queryAllByTestId('tableBodyCol').length).toBe(6);
    expect(queryAllByTestId('tableBodyCol')[0].innerHTML).toBe(data[0][0]);
    expect(queryAllByTestId('tableBodyCol')[1].innerHTML).toBe(data[0][1]);
    expect(queryAllByTestId('tableBodyCol')[2].innerHTML).toBe(data[0][2]);
    expect(queryAllByTestId('tableBodyCol')[3].innerHTML).toBe(data[1][0]);
    expect(queryAllByTestId('tableBodyCol')[4].innerHTML).toBe(data[1][1]);
    expect(queryAllByTestId('tableBodyCol')[5].innerHTML).toBe(data[1][2]);

    expect(queryAllByTestId('tableFooterRow').length).toBe(1);
    expect(queryAllByTestId('tableFooterCol').length).toBe(3);
    expect(queryAllByTestId('tableFooterCol')[0].innerHTML).toBe(footers[0]);
    expect(queryAllByTestId('tableFooterCol')[1].innerHTML).toBe(footers[1]);
    expect(queryAllByTestId('tableFooterCol')[2].innerHTML).toBe(footers[2]);
  });
});
