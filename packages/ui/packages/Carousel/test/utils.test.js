import {
  responsiveItemCount,
  truncResponsiveItemCount,
  calcFinalItemPosition,
  calcFirstItemPosition,
  calcSliderGroupCount,
  calcSliderChildWidth,
  directionSetter,
  setTranslate3d,
  switchInfiniteResponsiveCount,
  vdomArrayConvertor,
} from '../src/core/utils';
const { JSDOM } = require('jsdom');

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
