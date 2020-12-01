import {
  calcSliderChildWidth,
  responsiveItemCount,
  truncResponsiveItemCount,
  switchInfiniteResponsiveCount,
  transitionendWatcher,
  elementCreator,
  childFider,
  prevNone,
  nextNone,
  addClassToElement,
  vdomArrayConvertor,
  removeAllChildren,
  infiniteChecker,
  dragChecker,
  calcAutoWidthAllSliderItems,
  setTranslate3d,
  directionSetter,
  calcFinalItemPosition,
} from './utils';

import { shiftSlideIsDir } from './sliderArrows/partial';
import SliderDots from './sliderDots/index';
import SliderTrailer from './slideTrailer/index';
import SliderArrows from './sliderArrows/index';
import DragEvent from './dragEvent/index';

class SliderCore {
  constructor(config) {
    this.setConfig(config);
    this.initialize();
  }

  setConfig = config => {
    const {
      slider,
      infinite = false,
      horizontal = 'default',
      responsive = {
        0: {
          items: 1,
        },
      },
      prevArrow = null,
      nextArrow = null,
      customArrow = false,
      nav = false,
      dots = false,
      autoPlay = false,
      rtl = false,
      drag = true,
      autoWidth = false,
      nextSpeed = 2000,
      threshold = 50,
      freeScroll = false,
      paginationWrapper = null,
      callBack = () => {},
    } = config;
    this.config = {
      slider,
      infinite,
      responsive,
      prevArrow,
      nextArrow,
      customArrow,
      nav,
      dots,
      autoPlay,
      rtl,
      drag,
      autoWidth,
      nextSpeed,
      threshold,
      horizontal,
      freeScroll,
      callBack,
      paginationWrapper,
    };
  };

  getConfig = () => this.config;

  setSlider = slider => {
    this.slider = slider;
  };

  getSlider = () => this.slider;

  setPosX1 = posX1 => {
    this.posX1 = posX1;
  };

  getPosX1 = () => this.posX1;

  setIntervalId = intervalId => {
    this.intervalId = intervalId;
  };

  getIntervalId = () => this.intervalId;

  setInfinite = infinite => {
    this.infinite = infinite;
  };

  getInfinite = () => this.infinite;

  setDrag = drag => {
    this.drag = drag;
  };

  getDrag = () => this.drag;

  setPosX2 = posX2 => {
    this.posX2 = posX2;
  };

  getPosX2 = () => this.posX2;

  setPerSlide = perSlide => {
    this.perSlide = perSlide;
  };

  getPerSlide = () => this.perSlide;

  setSliderItems = sliderItems => {
    this.sliderItems = sliderItems;
  };

  getSliderItems = () => this.sliderItems;

  setPosInitial = posInitial => {
    this.posInitial = posInitial;
  };

  getPosInitial = () => this.posInitial;

  setPosFinal = posFinal => {
    this.posFinal = posFinal;
  };

  getPosFinal = () => this.posFinal;

  setSlidesLength = slidesLength => {
    this.slidesLength = slidesLength;
  };

  getSlidesLength = () => this.slidesLength;

  setSliderMainWidth = sliderMainWidth => {
    this.sliderMainWidth = sliderMainWidth;
  };

  getSliderMainWidth = () => this.sliderMainWidth;

  setOrginSlider = orginSlider => {
    this.orginSlider = orginSlider;
  };

  getOrginSlider = () => this.orginSlider;

  setSlideSize = slideSize => {
    this.slideSize = slideSize;
  };

  getSlideSize = () => this.slideSize;

  setSliderItemWidth = sliderItemWidth => {
    this.sliderItemWidth = sliderItemWidth;
  };

  getSliderItemWidth = () => this.sliderItemWidth;

  setIndex = index => {
    this.index = index;
  };

  getIndex = () => this.index;

  setAllowShift = allowShift => {
    this.allowShift = allowShift;
  };

  getAllowShift = () => this.allowShift;

  initialize = () => {
    const {
      slider,
      infinite,
      responsive,
      nav,
      dots,
      autoPlay,
      rtl,
      drag,
      nextSpeed,
      customArrow,
      autoWidth,
      horizontal,
      paginationWrapper,
    } = this.getConfig();

    // reset Slider
    const mainSlider = slider;
    const mainSliderClone = mainSlider.cloneNode(true);
    this.setSlider(mainSliderClone);
    removeAllChildren({
      wrapper: slider,
      className: 'clone',
    });

    // ----------- start init variables  -----
    this.setSlider(slider);

    const sliderClienWidth = this.getSlider().getBoundingClientRect().width;
    this.setSliderMainWidth(sliderClienWidth);

    const sliderSlidesSelector = childFider({
      wrapper: slider,
      className: '.slides',
    });
    this.setSliderItems(sliderSlidesSelector);

    const sliderChildWidth = calcSliderChildWidth({
      responsiveItemCount: responsiveItemCount(responsive),
      slider: this.getSlider(),
    });
    this.setSlideSize(sliderChildWidth);

    const sliderItemWidth = calcSliderChildWidth({
      responsiveItemCount: responsiveItemCount(responsive),
      slider: this.getSlider(),
    });
    this.setSliderItemWidth(sliderItemWidth);

    // init slider for start
    const slides = vdomArrayConvertor(sliderSlidesSelector.children);
    const sliderLength = slides.length;
    this.setSlidesLength(sliderLength);

    const perSlide = switchInfiniteResponsiveCount(
      truncResponsiveItemCount(responsive),
      infinite,
    );

    this.setPerSlide(perSlide);

    const infCheck = infiniteChecker({
      infinite,
      perSlide,
      sliderLength,
    });
    this.setInfinite(infCheck);

    const dragCheck = dragChecker({
      drag,
      perSlide: truncResponsiveItemCount(responsive),
      sliderLength,
    });

    this.setDrag(dragCheck);

    // set init index
    if (infCheck) {
      this.setIndex(perSlide + 1);
    } else {
      this.setIndex(0);
    }

    if (rtl) {
      const classItemParams = {
        item: slider,
        className: 'slider-rtl',
      };
      addClassToElement(classItemParams);
    }

    if (nav) {
      if (!customArrow) {
        elementCreator({
          tag: 'Span',
          wrapper: slider,
          className: 'control next',
        });
        elementCreator({
          tag: 'Span',
          wrapper: slider,
          className: 'control prev',
        });
      }
      this.sliderArrows = new SliderArrows({ core: this });
      const index = this.getIndex();
      if (
        sliderLength <= truncResponsiveItemCount(responsive) ||
        (autoWidth &&
          calcAutoWidthAllSliderItems(this.sliderItems) <= this.sliderMainWidth)
      ) {
        prevNone(slider);
        nextNone(slider);
      }
      if (!infCheck) {
        if (index === 0) {
          prevNone(slider);
        }
      }
    }

    if (dots || (paginationWrapper && paginationWrapper.current)) {
      if (dots) {
        elementCreator({ tag: 'Ul', wrapper: slider, className: 'dots' });
      }
      this.sliderDots = new SliderDots({ core: this });
    }

    if (autoPlay) {
      let isIntervalRunning = false;
      const time = nextSpeed || 2000;
      const intervalNext = () => {
        isIntervalRunning = true;
        this.next();
      };
      const intervalPlay = () => {
        clearInterval(this.getIntervalId()); // Clearing interval if for some reason it has not been cleared yet
        if (!isIntervalRunning) {
          this.setIntervalId(setInterval(intervalNext, time));
        }
      };
      const intervalPause = () => {
        clearInterval(this.getIntervalId()); // Clearing interval on window blur
        isIntervalRunning = false;
      };
      // toggle on mouseHover
      slider.addEventListener('mouseover', intervalPause);
      slider.addEventListener('mouseout', intervalPlay);
      // toggle on blur and focus browser window tab
      window.addEventListener('blur', intervalPause);
      window.addEventListener('focus', intervalPlay);
      if (!this.getIntervalId()) {
        intervalPlay();
      }
    }

    this.sliderTrailer = new SliderTrailer({ core: this });

    // action drag event
    this.dragEvent = new DragEvent({ core: this });

    sliderSlidesSelector.addEventListener('transitionend', e => {
      if (e.target !== sliderSlidesSelector) return;
      this.transitionendWatcherCall();
    });

    // active center mode
    if (
      horizontal === 'center' &&
      sliderLength < truncResponsiveItemCount(responsive)
    ) {
      const freeItems = truncResponsiveItemCount(responsive) - sliderLength;
      const freeSpace = directionSetter({
        rtl,
        input: (freeItems * sliderItemWidth) / 2,
      });
      this.sliderItems.style.transform = setTranslate3d(freeSpace);
    }

    this.windowResizeWatcher();
  };

  goToShowingSlide(newPosition) {
    const {
      config: { responsive, rtl, infinite, slider, nav, autoWidth },
      getSliderItems,
      transitionendWatcherCall,
      getSliderItemWidth,
      setIndex,
      setPosInitial,
      getSlidesLength,
      slideSize,
      sliderMainWidth,
      perSlide,
    } = this;

    if (getSlidesLength() <= responsiveItemCount(responsive)) {
      return false;
    }
    const sliderItems = getSliderItems();
    const newIndex = infinite
      ? newPosition + responsiveItemCount(responsive) + 1
      : newPosition;
    const result = directionSetter({
      rtl,
      input: -getSliderItemWidth() * newIndex,
    });

    const finalItemPosition = calcFinalItemPosition({
      indexItem: newIndex,
      slideSize,
      sliderItems,
      sliderMainWidth,
      perSlide,
      slidesLength: getSlidesLength(),
      infinite,
      slider,
      nav,
      rtl,
      autoWidth,
    });

    if (Math.abs(result) < Math.abs(finalItemPosition)) {
      sliderItems.style.transform = setTranslate3d(result);
      setIndex(newIndex);
      setPosInitial(result);

      setTimeout(() => {
        transitionendWatcherCall();
      }, 0);
      return newIndex;
    }
    sliderItems.style.transform = setTranslate3d(-finalItemPosition);
    setIndex(newIndex);
    setPosInitial(-finalItemPosition);
    setTimeout(() => {
      transitionendWatcherCall();
    }, 0);
    return newIndex;
  }

  refresh(flag) {
    if (flag) {
      this.initialize();
    }
  }

  next() {
    const {
      sliderItems,
      index,
      perSlide,
      slideSize,
      slidesLength,
      sliderMainWidth,
      getInfinite,
      config: { slider, responsive, rtl, autoWidth },
    } = this;
    const classItemParams = {
      item: childFider({
        wrapper: slider,
        className: '.slides',
      }),
      className: 'shifting',
    };
    addClassToElement(classItemParams);

    this.setIndex(
      shiftSlideIsDir({
        sliderItems,
        index,
        perSlide,
        slideSize,
        slidesLength,
        sliderMainWidth,
        responsiveItem: responsiveItemCount(responsive),
        infinite: getInfinite(),
        slider,
        rtl,
        autoWidth,
      }),
    );
  }

  transitionendWatcherCall = () => {
    const {
      config: {
        slider,
        responsive,
        dots,
        nav,
        rtl,
        autoWidth,
        infinite,
        freeScroll,
        callBack,
      },
      index,
      sliderItems,
      slideSize,
      sliderMainWidth,
      slidesLength,
      sliderItemWidth,
      setIndex,
      setAllowShift,
    } = this;
    transitionendWatcher({
      responsive,
      infinite,
      slider,
      rtl,
      index,
      sliderItems,
      slideSize,
      sliderMainWidth,
      dots,
      slidesLength,
      sliderItemWidth,
      nav,
      autoWidth,
      freeScroll,
      setAllowShift,
      setIndex,
      callBack,
    });
  };

  windowResizeWatcher = () => {
    let resizeTimer;
    window.onresize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        this.initialize();
      }, 250);
    };
  };
}

export default SliderCore;
