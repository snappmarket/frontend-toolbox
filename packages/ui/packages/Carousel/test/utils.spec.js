// import * as React from 'react';
// import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
const { JSDOM } = require('jsdom');
// import { Wrapper } from '../../../test/test.helpers';
// import Carousel from '../index';
// import { Slider } from '../src/core/index';

import {
  addClassToElement,
  removeClassFromElement,
  calcCurrentIndex,
  // sliderClientWidth,
  responsiveItemCount,
  // setActiveclassToCurrent,
  setSliderItemsPosition,
  truncResponsiveItemCount,
  calcFinalItemPosition,
  calcFirstItemPosition,
  calcSliderGroupCount,
  calcSliderChildWidth,
  directionSetter,
  setTranslate3d,
  getTranslate3d,
  dragChecker,
  infiniteChecker,
  switchInfiniteResponsiveCount,
  vdomArrayConvertor,
  activeChecker,
  removeAllChildren,
  childFider,
  elementCreator,
  prevBlock,
  prevNone,
  nextBlock,
  nextNone,
  sorter,
  isFloat,
} from '../src/core/utils';

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
      <span class="slide active" data-page="1" style="width: 607.5px;">Slide 1</span>
      <span class="slide active" data-page="1" style="width: 607.5px;">Slide 2</span>
      <span class="slide" data-page="2" style="width: 607.5px;">Slide 3</span>
      <span class="slide" data-page="2" style="width: 607.5px;">Slide 4</span>
      <span class="slide" data-page="3" style="width: 607.5px;">Slide 5</span>
    </div>
`;
const mockTranslate3d = `
    <div class="slides" style="transform: translate3d(1000px, 0px, 0px);">
      <span class="slide active" data-page="1" style="width: 607.5px;">Slide 1</span>
      <span class="slide active" data-page="1" style="width: 607.5px;">Slide 2</span>
      <span class="slide" data-page="2" style="width: 607.5px;">Slide 3</span>
      <span class="slide" data-page="2" style="width: 607.5px;">Slide 4</span>
      <span class="slide" data-page="3" style="width: 607.5px;">Slide 5</span>
    </div>`;

test('shoult number is float', () => {
  expect(isFloat(2.5)).toBe(true);
});
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

  // const wrapperGenerator = () => {
  //   const { getByTestId } = render(
  //     <Wrapper>
  //       <Carousel
  //         className="test-class"
  //         slideConfig={slideConfig}
  //       >
  //         <div className="item">1</div>
  //         <div className="item">2</div>
  //         <div className="item">3</div>
  //         <div className="item">4</div>
  //       </Carousel>
  //     </Wrapper>,
  //   );
  //   return getByTestId('carousel');
  // };
  // test('Carousel change class', () => {
  //   expect(wrapperGenerator()).toHaveClass('test-class');
  // });

  test('Carousel dragChecker for false or true', () => {
    const paramsDragFalse = { drag: false, sliderLength: 2, perSlide: 2 };
    expect(dragChecker(paramsDragFalse)).toBe(false);

    const paramsDragTrue = { drag: true, sliderLength: 10, perSlide: 2 };
    expect(dragChecker(paramsDragTrue)).toBe(true);
  });

  test('Carousel infiniteChecker for false or true', () => {
    const paramsInfiniteFalse = {
      infinite: false,
      sliderLength: 2,
      perSlide: 2,
    };
    expect(infiniteChecker(paramsInfiniteFalse)).toBe(false);

    const paramsInfiniteFalseWidthSliderLength = {
      infinite: true,
      sliderLength: 2,
      perSlide: 2,
    };
    expect(infiniteChecker(paramsInfiniteFalseWidthSliderLength)).toBe(false);

    const paramsInfiniteTrue = {
      infinite: true,
      sliderLength: 10,
      perSlide: 2,
    };
    expect(infiniteChecker(paramsInfiniteTrue)).toBe(true);
  });

  test('Check data-page for first active item', () => {
    expect(activeChecker(stringToHTML(mockSlides))).toBe(0);
  });

  test('Remove all child with class name', () => {
    const testParams = {
      wrapper: stringToHTML(mockSlides),
      className: 'slide active',
    };
    expect(removeAllChildren(testParams)).toBe(2);
  });

  test('Find a child with class name', () => {
    const testParams = {
      wrapper: stringToHTML(mockSlider),
      className: '.dots',
    };
    const findElement = childFider(testParams);
    const expectIs = stringToHTML(
      `<ul class="dots">
      <li class="dots-item active" data-dot-index="1">1</li>
      <li class="dots-item" data-dot-index="2">2</li>
      <li class="dots-item" data-dot-index="3">3</li>
    </ul>`,
    );
    expect(findElement).toStrictEqual(expectIs);
  });

  test('Check Element Generator', () => {
    const testParams = {
      tag: 'Ul',
      wrapper: stringToHTML(mockSlider),
      className: 'dots',
    };
    const expectIs = stringToHTML(`<ul class="dots" />`);
    expect(elementCreator(testParams)).toStrictEqual(expectIs);
  });

  test('Check Add class to element', () => {
    const testParams = {
      item: stringToHTML(`<ul class="dots" />`),
      className: 'test-class',
    };
    const expectIs = stringToHTML(`<ul class="dots test-class" />`);
    expect(addClassToElement(testParams)).toStrictEqual(expectIs);
  });

  test('Check remove class from element', () => {
    const testParams = {
      item: stringToHTML(`<ul class="dots test-class" />`),
      className: 'test-class',
    };
    const expectIs = stringToHTML(`<ul class="dots" />`);
    expect(removeClassFromElement(testParams)).toStrictEqual(expectIs);
  });

  test('Check getTranslate3d from wrapper', () => {
    expect(getTranslate3d(stringToHTML(mockSlides))).toBe(0);
  });

  test('Check sorter', () => {
    expect([0, 960, 450, 1200].sort(sorter)).toStrictEqual([0, 450, 960, 1200]);
  });

  test('Check current index', () => {
    const testParams = {
      sliderItems: stringToHTML(mockSlides),
      infinite: false,
      perSlide: 2,
      slideSize: 607.5,
      sliderMainWidth: 1215,
      slidesLength: 5,
      freeScroll: false,
      autoWidth: false,
      responsiveItemCount: 2,
    };
    const testParams3d = {
      sliderItems: stringToHTML(mockTranslate3d),
      infinite: false,
      perSlide: 2,
      slideSize: 607.5,
      sliderMainWidth: 1215,
      slidesLength: 5,
      freeScroll: false,
      autoWidth: false,
      responsiveItemCount: 2,
    };

    expect(calcCurrentIndex(testParams)).toBe(0);
    expect(calcCurrentIndex(testParams3d)).toBe(2);
  });

  test('Check setSliderItemsPosition', () => {
    const testParams = {
      sliderItemWidth: 607.5,
      sliderItems: stringToHTML(mockSlides),
      rtl: true,
      indexItem: 2,
    };
    expect(setSliderItemsPosition(testParams)).toBe(2);
  });

  test('Check Next and Prev button', () => {
    const mockElement = stringToHTML(mockSlider);
    const expectIs = stringToHTML(
      `<span class="control prev" style="display: flex;" />`,
    );
    const expectIsNone = stringToHTML(
      `<span class="control prev" style="display: none;" />`,
    );
    const expectIsNext = stringToHTML(
      `<span class="control next" style="display: flex;" />`,
    );
    const expectIsNextNone = stringToHTML(
      `<span class="control next" style="display: none;" />`,
    );
    expect(prevBlock(mockElement)).toStrictEqual(expectIs);
    expect(prevNone(mockElement)).toStrictEqual(expectIsNone);
    expect(nextBlock(mockElement)).toStrictEqual(expectIsNext);
    expect(nextNone(mockElement)).toStrictEqual(expectIsNextNone);
  });
});
