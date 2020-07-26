// import * as React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { Wrapper } from '../../../test/test.helpers';
// import Carousel from '../index';
// import { Slider } from '../src/core/index';
// const { JSDOM } = require('jsdom');

import {
  addCloneClass,
  setPageNumberOnChild,
  cloneNodeAppendChild,
  // cloneNodeGenerator,
  // cloneNodeInsertBefore,
} from '../src/core/slideTrailer/partial';
import { vdomArrayConvertor } from '../src/core/utils';

// real DOM generator
const stringToHTML = str => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body.firstChild;
};

const mockSlider = `
  <div id="slider" class="slider loaded">
    <div class="wrapper">
      <div class="slides" style="transform: translate3d(0px, 0px, 0px);">
        <span class="slide active" data-page="1" style="width: 607.5px;">Slide 1</span>
        <span class="slide active" data-page="1" style="width: 607.5px;">Slide 2</span>
        <span class="slide" data-page="2" style="width: 607.5px;">Slide 3</span>
        <span class="slide" data-page="2" style="width: 607.5px;">Slide 4</span>
        <span class="slide" data-page="3" style="width: 607.5px;">Slide 5</span>
      </div>
    </div>
    <span class="control next" style="display: block;"></span><span class="control prev" style="display: none;"></span>
    <ul class="dots">
      <li class="dots-item active" data-dot-index="1">1</li>
      <li class="dots-item" data-dot-index="2">2</li>
      <li class="dots-item" data-dot-index="3">3</li>
    </ul>
  </div>
`;
const mockSlides = `
    <div class="slides" style="transform: translate3d(0px, 0px, 0px);">
      <span class="slide active" style="width: 607.5px;">Slide 1</span>
      <span class="slide active" style="width: 607.5px;">Slide 2</span>
      <span class="slide" style="width: 607.5px;">Slide 3</span>
      <span class="slide" style="width: 607.5px;">Slide 4</span>
      <span class="slide" style="width: 607.5px;">Slide 5</span>
    </div>
`;
const mockTranslate3d = `
    <div class="slides" style="transform: translate3d(1000px, 0px, 0px);"></div>
`;

const slideConfig = {
  threshold: 50,
  infinite: false,
  nav: true,
  dots: false,
  autoPlay: false,
  rtl: true,
  responsive: {
    0: {
      items: 1.5,
    },
    560: {
      items: 2,
    },
    760: {
      items: 4,
    },
    920: {
      items: 6,
    },
  },
};

describe('Partial Trailer', () => {
  test('Check Add class to element', () => {
    const testParams = stringToHTML(`<div class="item" />`);
    const expectIs = stringToHTML(`<div class="item clone" />`);
    expect(addCloneClass(testParams)).toStrictEqual(expectIs);
  });
  test('Check set page number of child', () => {
    const testParams = {
      responsive: slideConfig.responsive,
      sliderItems: stringToHTML(mockSlides),
    };
    expect(setPageNumberOnChild(testParams)).toStrictEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
    ]);
  });
  test('Check clone node append child', () => {
    const sliderItemsChildren = vdomArrayConvertor(
      stringToHTML(mockSlides).children,
    );
    const deepCloneSliderItemsChildren = [...sliderItemsChildren];
    const cloneNodeParams = {
      perSlide: 2,
      deepCloneSliderItemsChildren,
      sliderItems: stringToHTML(mockSlides),
    };
    expect(cloneNodeAppendChild(cloneNodeParams).length).toStrictEqual(3);
  });
});
