import * as React from 'react';
import { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import {
  responsiveItemCount,
  truncResponsiveItemCount,
  calcFinalItemPosition,
  calcFirstItemPosition,
  calcSliderGroupCount,
  calcSliderChildWidth,
  directionSetter,
  setTranslate3d,
  // getTranslate3d,
  switchInfiniteResponsiveCount,
  vdomArrayConvertor,
} from '../src/core/utils';
const { JSDOM } = require('jsdom');
import '@testing-library/jest-dom/extend-expect';
import { Wrapper } from '../../../test/test.helpers';
import Carousel from '../index';
// import { Slider } from '../src/core/index';

test('responsiveItemCount 0:{items:2.5} to equal 2.5', () => {
  const config = {
    0: {
      items: 2.5,
    },
    560: {
      items: 3,
    },
    760: {
      items: 2.5,
    },
  };
  expect(responsiveItemCount(config)).toBe(2.5);
});

test('truncResponsiveItemCount 0:{items:2.5} to equal 2', () => {
  const config = {
    0: {
      items: 2.5,
    },
    560: {
      items: 3,
    },
    760: {
      items: 2.5,
    },
  };
  expect(truncResponsiveItemCount(config)).toBe(2);
});

test('calcFinalItemPosition to equal  -2673', () => {
  const config = {
    slideSize: 486,
    slidesLength: 8,
    sliderMainWidth: 1215,
    perSlide: 2,
    infinite: false,
  };
  expect(calcFinalItemPosition(config)).toBe(-2673);
});

test('calcFirstItemPosition to equal  -0,-1458', () => {
  const config = {
    slideSize: 486,
    perSlide: 2,
  };
  const infiniteFalse = false;
  const infiniteTrue = true;
  if (infiniteFalse === false) {
    expect(
      calcFirstItemPosition({
        ...config,
        infinite: false,
      }),
    ).toBe(-0);
  }
  if (infiniteTrue) {
    expect(
      calcFirstItemPosition({
        ...config,
        infinite: true,
      }),
    ).toBe(-1458);
  }
});

test('calcSliderGroupCount 0:{items:2.5} to equal 4', () => {
  const config = {
    responsive: {
      0: {
        items: 2.5,
      },
      560: {
        items: 3,
      },
      760: {
        items: 2.5,
      },
    },
    slidesLength: 8,
  };
  expect(calcSliderGroupCount(config)).toBe(4);
});

test('calcSliderChildWidth by responsiveItemCount: 2.5 to equal 486', () => {
  const jsdom = new JSDOM('<!DOCTYPE html><html>...');
  Object.defineProperty(jsdom.window.HTMLHtmlElement.prototype, 'clientWidth', {
    value: 1215,
  });

  const config = {
    responsiveItemCount: 2.5,
    slider: jsdom.window.document.documentElement,
  };
  expect(calcSliderChildWidth(config)).toBe(486);
});

test('directionSetter rtl to equal -10,10', () => {
  const config = {
    input: 10,
  };
  const rtlFalse = false;
  const rtlTrue = true;
  if (rtlFalse === false) {
    expect(
      directionSetter({
        ...config,
        rtl: false,
      }),
    ).toBe(10);
  }
  if (rtlTrue) {
    expect(
      directionSetter({
        ...config,
        rtl: true,
      }),
    ).toBe(-10);
  }
});

test('setTranslate3d 210 to equal translate3d(210px,0px,0px)', () => {
  expect(setTranslate3d(210)).toBe('translate3d(210px,0px,0px)');
});

// test('getTranslate3d translate3d(210.5px,0px,0px) to equal 210.5', () => {
//   const jsdom = new JSDOM('<!DOCTYPE html><html>...');
//   Object.defineProperty(jsdom.window.HTMLHtmlElement.prototype, 'style', {value: 'transform: translate3d(210.5px, 0px, 0px)'});
//   expect(getTranslate3d(jsdom.window.document.documentElement)).toBe(210.5);
// });

test('switchInfiniteResponsiveCount to equal  10,0', () => {
  const infiniteFalse = false;
  const infiniteTrue = true;
  if (infiniteFalse === false) {
    expect(switchInfiniteResponsiveCount(10, infiniteFalse)).toBe(0);
  }
  if (infiniteTrue) {
    expect(switchInfiniteResponsiveCount(10, infiniteTrue)).toBe(10);
  }
});

test('vdomArrayConvertor to equal  [1,2],[1,2]', () => {
  const arr = ['a', 'b'];
  const obj = { a: 1, b: 2 };
  if (arr) {
    expect(vdomArrayConvertor(arr)).toStrictEqual(['a', 'b']);
  }
  if (obj) {
    expect(vdomArrayConvertor(obj)).toStrictEqual([1, 2]);
  }
});

describe('Carousel ui component tests', () => {
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

  const wrapperGenerator = () => {
    const { getByTestId } = render(
      <Wrapper>
        <Carousel
          className="test-class"
          slideConfig={slideConfig}
        >
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
        </Carousel>
      </Wrapper>,
    );
    return getByTestId('carousel');
  };
  it('Carousel change class', () => {
    expect(wrapperGenerator()).toHaveClass('test-class');
  });
});
