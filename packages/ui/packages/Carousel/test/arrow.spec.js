// import * as React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { Wrapper } from '../../../test/test.helpers';
// import Carousel from '../index';
// import { Slider } from '../src/core/index';
// const { JSDOM } = require('jsdom');

import {
  shiftSlideIsDir,
  shiftSlideNonDir,
} from '../src/core/sliderArrows/partial';
// import {
//   vdomArrayConvertor
// } from '../src/core/utils';

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

describe('Partial arrow next', () => {
  test('Check shift Slide to next', () => {
    const params = {
      sliderItems: stringToHTML(mockSlides),
      slider: stringToHTML(mockSlider),
      slideSize: 607.5,
      sliderMainWidth: 1215,
      index: 0,
      perSlide: 2,
      slidesLength: 6,
      rtl: true,
      responsiveItem: 2,
      infinite: false,
    };
    expect(shiftSlideIsDir(params)).toBe(2);
  });
  test('Check slidesLength <= perSlide', () => {
    const params = {
      sliderItems: stringToHTML(mockSlides),
      slider: stringToHTML(mockSlider),
      slideSize: 607.5,
      sliderMainWidth: 1215,
      index: 0,
      perSlide: 4,
      slidesLength: 3,
      responsiveItem: 2,
      infinite: false,
      rtl: true,
    };
    expect(shiftSlideIsDir(params)).toBe(0);
  });
  test('Check index when newIndex === newSlidesLength & infinite false', () => {
    const params = {
      sliderItems: stringToHTML(mockSlides),
      slider: stringToHTML(mockSlider),
      slideSize: 607.5,
      sliderMainWidth: 1215,
      index: 0,
      perSlide: 2,
      slidesLength: 3,
      responsiveItem: 1,
      infinite: false,
      rtl: true,
    };
    expect(shiftSlideIsDir(params)).toBe(2);
  });
  test('Check index when responsive !== 1 & infinite false', () => {
    const params = {
      sliderItems: stringToHTML(mockSlides),
      slider: stringToHTML(mockSlider),
      slideSize: 607.5,
      sliderMainWidth: 1215,
      index: 2,
      perSlide: 2,
      slidesLength: 6,
      responsiveItem: 2,
      infinite: false,
      rtl: true,
    };
    expect(shiftSlideIsDir(params)).toBe(4);
  });
});

describe('Partial arrow prev', () => {
  test('Check shift Slide to prev int = false newIndex < newPerSlide', () => {
    const params = {
      sliderItems: stringToHTML(mockSlides),
      slider: stringToHTML(mockSlider),
      slideSize: 607.5,
      index: 0,
      perSlide: 2,
      rtl: true,
      infinite: false,
    };
    expect(shiftSlideNonDir(params)).toBe(-2);
  });
  test('Check shift Slide to prev', () => {
    const params = {
      sliderItems: stringToHTML(mockSlides),
      slider: stringToHTML(mockSlider),
      slideSize: 607.5,
      index: 5,
      perSlide: 2,
      rtl: true,
      infinite: false,
    };
    expect(shiftSlideNonDir(params)).toBe(3);
  });
  test('Check shift Slide to prev int true', () => {
    const params = {
      sliderItems: stringToHTML(mockSlides),
      slider: stringToHTML(mockSlider),
      slideSize: 607.5,
      index: 5,
      perSlide: 2,
      rtl: true,
      infinite: true,
    };
    expect(shiftSlideNonDir(params)).toBe(3);
  });
});
