import React from 'react';
import { storiesOf } from '@storybook/react';
import { Row, Col, Button } from '@snappmarket/ui';
import ReadMe from '../../README.md';

const modifiers = ['primary', 'outline', 'link'];
const sizes = ['xl', 'lg', 'md', 'sm', 'xs'];
const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'gray'];
const shades = ['dark', 'normal', 'light', 'ultra-light', 'bright'];

storiesOf('components/Globals', module).add(
  'Button',
  () => (
    <div className="p-2">
      <div>
        <h2>Colors and Shades</h2>
        <p>
          Buttons contains 6 different color collections and 5 shades
        </p>
        <Row className="mt-1">
          {colors.map(color => (
            <Col className="text-center" key={color} xs={2}>
              <h3>{color}</h3>
            </Col>
          ))}
        </Row>
        {shades.map(shade => (
          <Row key={shade} className="mt-1">
            {colors.map(color => (
              <Col key={color} xs={2}>
                <Button color={color} shade={shade} modifier='primary' size="sm" title={shade}/>
              </Col>
            ))}
          </Row>
        ))}
      </div>
      <div>
        <h2>Modifier and Sizes</h2>
        <p>
          Buttons contains 3 different modifiers and 5 sizes
        </p>
        <Row className="mt-1">
          {modifiers.map(modifier => (
            <Col className="text-center" key={modifier} xs={4}>
              <h3>{modifier}</h3>
            </Col>
          ))}
        </Row>
        {sizes.map(size => (
          <Row key={size} className="mt-1">
            {modifiers.map(modifier => (
              <Col key={modifier} xs={4} className="align-center justify-center">
                <Button modifier={modifier} size={size} title={size}/>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </div>
  ), {
    notes: ReadMe
  },
);
