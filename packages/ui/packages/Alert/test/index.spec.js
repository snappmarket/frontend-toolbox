
import renderer from 'react-test-renderer';
import React from 'react';
import Alert from '../index';

test('Alert changes the class when get different props', () => {
  const component = renderer.create(
    <Alert status="error" closable="true" onClose={() => {}}><h3>مشکلی وجود دارد</h3></Alert>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.status;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();


  tree.props.onClose;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.children;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.closable;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
