import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Wrapper, theme } from '../../../test/test.helpers';
import { Col, Container, Row } from '../../index';

describe('Grid ui component tests on Col', () => {
  it('Should render children', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Col>
          <div data-testid="gridChild">test</div>
        </Col>
      </Wrapper>,
    );
    const gridChild = getByTestId('gridChild');
    expect(getByTestId('colGridSystem')).toContainElement(gridChild);
  });

  it('Should change class name with props', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Col className="test-class">
          <div data-testid="gridChild">test</div>
        </Col>
      </Wrapper>,
    );
    expect(getByTestId('colGridSystem')).toHaveClass('test-class');
  });

  it('Should render when layout type is null ', () => {
    const xsGrid = renderer
      .create(
        <Wrapper>
          <Col>
            <div data-testid="gridChild">test</div>
          </Col>
        </Wrapper>,
      )
      .toJSON();
    expect(xsGrid).toHaveStyleRule('max-width', `100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('flex', `0 0 100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('order', 'unset', {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('margin-right', '0%', {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
  });

  it('Should render when layout type is not an object ', () => {
    const xsGrid = renderer
      .create(
        <Wrapper>
          <Col xs={12}>
            <div data-testid="gridChild">test</div>
          </Col>
        </Wrapper>,
      )
      .toJSON();
    expect(xsGrid).toHaveStyleRule('max-width', `100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('flex', `0 0 100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('order', 'unset', {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('margin-right', '0%', {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
  });
  it('Should render when layout type is an empty object ', () => {
    const xsGrid = renderer
      .create(
        <Wrapper>
          <Col xs={{}}>
            <div data-testid="gridChild">test</div>
          </Col>
        </Wrapper>,
      )
      .toJSON();
    expect(xsGrid).toHaveStyleRule('max-width', `100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('flex', `0 0 100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('order', 'unset', {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('margin-right', '0%', {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
  });
  it('Should render when layout type is object', () => {
    const layouts = {
      xs: {
        size: 12,
        order: 'unset',
        offset: 0,
      },
    };
    const xsGrid = renderer
      .create(
        <Wrapper>
          <Col {...layouts}>
            <div data-testid="gridChild">test</div>
          </Col>
        </Wrapper>,
      )
      .toJSON();
    expect(xsGrid).toHaveStyleRule('max-width', `100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule(
      'flex',
      `0 0 ${(100 * layouts.xs.size) / 12}%`,
      {
        media: `(min-width: ${theme.viewports.xs}px)`,
      },
    );
    expect(xsGrid).toHaveStyleRule('order', layouts.xs.order, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule(
      'margin-right',
      `${(100 * layouts.xs.offset) / 12}%`,
      {
        media: `(min-width: ${theme.viewports.xs}px)`,
      },
    );
  });
  it('Should render when layout type is object but default value', () => {
    const layouts = {
      xs: {},
    };
    const xsGrid = renderer
      .create(
        <Wrapper>
          <Col layouts={layouts}>
            <div data-testid="gridChild">test</div>
          </Col>
        </Wrapper>,
      )
      .toJSON();
    expect(xsGrid).toHaveStyleRule('max-width', `100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('flex', `0 0 100%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('order', 'unset', {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
    expect(xsGrid).toHaveStyleRule('margin-right', `0%`, {
      media: `(min-width: ${theme.viewports.xs}px)`,
    });
  });
});

describe('GridSystem ui component test on Container', () => {
  it('Should render children on Container', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Container className="test-class">
          <div data-testid="gridChild">test</div>
        </Container>
      </Wrapper>,
    );
    const gridChild = getByTestId('gridChild');
    expect(getByTestId('gridContainer')).toContainElement(gridChild);
  });

  it('Should change class name with props on Container', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Container className="test-class">
          <div data-testid="gridChild">test</div>
        </Container>
      </Wrapper>,
    );
    expect(getByTestId('gridContainer')).toHaveClass('test-class');
  });
});

describe('GridSystem ui component test on Row', () => {
  it('Should render children on Row', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Row className="test-class">
          <div data-testid="gridChild">test</div>
        </Row>
      </Wrapper>,
    );
    const gridChild = getByTestId('gridChild');
    expect(getByTestId('gridRow')).toContainElement(gridChild);
  });

  it('Should change class name with props on Row', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Row className="test-class">
          <div data-testid="gridChild">test</div>
        </Row>
      </Wrapper>,
    );
    expect(getByTestId('gridRow')).toHaveClass('test-class');
  });
});
