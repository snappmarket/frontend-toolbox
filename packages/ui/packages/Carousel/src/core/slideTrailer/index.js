import {
  setSliderItemsPosition,
  setSliderItemsChildWidth,
  setActiveclassToCurrent,
  addClassToElement,
} from '../utils';

import {
  setPageNumberOnChild,
  cloneNodeGenerator,
} from './partial';

export default class SliderTrailer {
  constructor(params) {
    const { core } = params;
    this.setCore(core);
    this.initialize();
  }

  setCore(core) {
    this.core = core;
  }

  getCore() {
    return this.core;
  }

  initialize() {
    const {
      config: {
<<<<<<< HEAD
        responsive,
        slider,
        rtl,
      },
      getInfinite,
=======
        infinite, responsive, slider, rtl,
      },
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882
      getSliderItems,
      getSliderItemWidth,
      getPerSlide,
      getSlideSize,
      getSliderMainWidth,
      getIndex,
      setIndex,
    } = this.core;

    const infinite = getInfinite();
    const sliderItems = getSliderItems();
    const slideSize = getSlideSize();
    const sliderItemWidth = getSliderItemWidth();
    const perSlide = getPerSlide();
    const sliderMainWidth = getSliderMainWidth();
    const index = getIndex();

    // set width per slide
    setSliderItemsChildWidth({
      sliderItems,
      slider,
      responsive,
    });

    // init slider position
    setIndex(setSliderItemsPosition({
      indexItem: index,
      sliderItemWidth,
      sliderItems,
      rtl,
    }));

    setPageNumberOnChild({ sliderItems, responsive });


    // Clone group of slide from infinite carousel
    if (infinite) {
      const cloneNodeGeneratorParams = {
        perSlide,
        sliderItems,
        wrapper: slider,
      };
      cloneNodeGenerator(cloneNodeGeneratorParams);
    }

    setActiveclassToCurrent({
      sliderItems,
      perSlide,
      slideSize,
      sliderMainWidth,
      index: getIndex(),
      infinite,
    });

    // add loaded class to main slide after init
    const classItemParams = {
      item: slider,
      className: 'loaded',
    };
    addClassToElement(classItemParams);
  }
}
