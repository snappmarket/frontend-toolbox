import {
  responsiveItemCount,
  truncResponsiveItemCount,
  getTranslate3d,
  childFider,
  addClassToElement,
  removeClassFromElement,
} from '../utils';

import { shiftSlideIsDir, shiftSlideNonDir } from './partial';
export default class SliderArrows {
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
      config: { slider },
      getSliderItems,
      setAllowShift,
    } = this.core;
    const prevSelector = childFider({
      wrapper: slider,
      className: '.prev',
    });
    const nextSelector = childFider({
      wrapper: slider,
      className: '.next',
    });

    // Click events
    prevSelector.addEventListener('click', () => this.shiftSlide(-1));
    nextSelector.addEventListener('click', () => this.shiftSlide(1));

    // remove shifting class and allowSHift permission
    const itemClassParams = {
      item: getSliderItems(),
      className: 'shifting',
    };
    removeClassFromElement(itemClassParams);
    setAllowShift(true);
  }

  shiftSlide(dir, action) {
    const {
      config: { responsive, rtl, autoWidth },
      getInfinite,
      getSliderItems,
      setPosInitial,
      getSlideSize,
      setIndex,
      getIndex,
      getSlidesLength,
      getSliderMainWidth,
      getSlider,
      getAllowShift,
      setAllowShift,
    } = this.core;

    const perSlide = truncResponsiveItemCount(responsive);
    if (getAllowShift()) {
      if (!action) {
        setPosInitial(getTranslate3d(getSliderItems()));
      }
      const shiftSlideParams = {
        sliderItems: getSliderItems(),
        slideSize: getSlideSize(),
        slidesLength: getSlidesLength(),
        slider: getSlider(),
        sliderMainWidth: getSliderMainWidth(),
        index: getIndex(),
        responsiveItem: responsiveItemCount(responsive),
        perSlide,
        dir,
        infinite: getInfinite(),
        rtl,
        autoWidth,
      };
      if (dir === 1) {
        setIndex(shiftSlideIsDir(shiftSlideParams));
      } else if (dir === -1) {
        setIndex(shiftSlideNonDir(shiftSlideParams));
      }
    }

    const itemClassParams = {
      item: getSliderItems(),
      className: 'shifting',
    };
    addClassToElement(itemClassParams);
    setAllowShift(false);
  }
}
