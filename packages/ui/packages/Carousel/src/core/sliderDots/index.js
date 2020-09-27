import {
  truncResponsiveItemCount,
  childFider,
  vdomArrayConvertor,
} from '../utils';

import { dotsItemsGenerator, dotsItemsClick } from './partial';

export default class SliderDots {
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

  setDotsSelector(dotsSelector) {
    this.dotsSelector = dotsSelector;
  }

  getDotsSelector() {
    return this.dotsSelector;
  }

  initialize() {
    const {
      config: { slider, responsive, nav, rtl, autoWidth, paginationWrapper },
      getInfinite,
      getSlidesLength,
      getSliderItemWidth,
      getSliderMainWidth,
      getSliderItems,
      getSlider,
      getSlideSize,
      setIndex,
      setAllowShift,
      setPosInitial,
    } = this.core;

    const sliderItems = getSliderItems();

    const dotsSelector = paginationWrapper
      ? paginationWrapper.current.querySelector('.slides')
      : childFider({
          wrapper: slider,
          className: '.dots',
        });
    if (!paginationWrapper) {
      // generate dots items
      const dotsItemsParams = {
        slidesLength: getSlidesLength(),
        responsive,
        dotsSelector,
        sliderItems,
        autoWidth,
        sliderMainWidth: getSliderMainWidth(),
      };
      dotsItemsGenerator(dotsItemsParams);
    }

    // generate dots group per show slides

    // dots item click for transition on active index
    vdomArrayConvertor(dotsSelector.children).forEach(item => {
      item.addEventListener('click', () => {
        const dotIndex = parseInt(item.getAttribute('data-dot-index'), 10);
        const indexItem = truncResponsiveItemCount(responsive) * (dotIndex - 1);
        const dotsItemsClickParams = {
          indexItem,
          sliderItemWidth: getSliderItemWidth(),
          sliderMainWidth: getSliderMainWidth(),
          sliderItems,
          slider: getSlider(),
          slideSize: getSlideSize(),
          slidesLength: getSlidesLength(),
          perSlide: truncResponsiveItemCount(responsive),
          infinite: getInfinite(),
          dotIndex,
          responsive,
          getSliderItems,
          nav,
          rtl,
          item,
          autoWidth,
        };
        const { index, allowShift, posInitial } = dotsItemsClick(
          dotsItemsClickParams,
        );
        setIndex(index);
        setAllowShift(allowShift);
        setPosInitial(posInitial);
      });
    });
  }
}
