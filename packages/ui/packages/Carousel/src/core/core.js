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

  setConfig = (config) => {
    this.config = config;
  };

	getConfig = () => this.config;

  setSlider = (slider) => {
    this.slider = slider;
  };

	getSlider = () => this.slider;

  setPosX1 = (posX1) => {
    this.posX1 = posX1;
  };

	getPosX1 = () => this.posX1;

  setPosX2 = (posX2) => {
    this.posX2 = posX2;
  };

	getInfinite = () => this.infinite;

  setPerSlide = (perSlide) => {
    this.perSlide = perSlide;
  };

	getDrag = () => this.drag;

  setSliderItems = (sliderItems) => {
    this.sliderItems = sliderItems;
  };

	getPosX2 = () => this.posX2;

<<<<<<< HEAD
	setPerSlide = (perSlide) => { this.perSlide = perSlide; };
=======
  setPosInitial = (posInitial) => {
    this.posInitial = posInitial;
  };
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882

	getPerSlide = () => this.perSlide;

<<<<<<< HEAD
=======
  setPosFinal = (posFinal) => {
    this.posFinal = posFinal;
  };
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882

	setSliderItems = (sliderItems) => { this.sliderItems = sliderItems; };

<<<<<<< HEAD
	getSliderItems = () => this.sliderItems;
=======
  setSlidesLength = (slidesLength) => {
    this.slidesLength = slidesLength;
  };
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882

	setPosInitial = (posInitial) => { this.posInitial = posInitial; };

<<<<<<< HEAD
	getPosInitial = () => this.posInitial;
=======
  setSliderMainWidth = (sliderMainWidth) => {
    this.sliderMainWidth = sliderMainWidth;
  };
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882

	setPosFinal = (posFinal) => { this.posFinal = posFinal; };

<<<<<<< HEAD
	getPosFinal = () => this.posFinal;
=======
  setOrginSlider = (orginSlider) => {
    this.orginSlider = orginSlider;
  };
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882

	setSlidesLength = (slidesLength) => { this.slidesLength = slidesLength; };

<<<<<<< HEAD
	getSlidesLength = () => this.slidesLength;
=======
  setSlideSize = (slideSize) => {
    this.slideSize = slideSize;
  };
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882

	setSliderMainWidth = (sliderMainWidth) => { this.sliderMainWidth = sliderMainWidth; };

<<<<<<< HEAD
	getSliderMainWidth = () => this.sliderMainWidth;


	setOrginSlider = (orginSlider) => { this.orginSlider = orginSlider; };

	getOrginSlider = () => this.orginSlider;

	setSlideSize = (slideSize) => { this.slideSize = slideSize; };

	getSlideSize = () => this.slideSize;

	setSliderItemWidth = (sliderItemWidth) => { this.sliderItemWidth = sliderItemWidth; };

	getSliderItemWidth = () => this.sliderItemWidth;

	setIndex = (index) => { this.index = index; };

	getIndex = () => this.index;

	setAllowShift = (allowShift) => { this.allowShift = allowShift; };

	getAllowShift = () => this.allowShift;

	updateLog = () => {
	  console.log(this.index);
	}

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

	  const sliderClienWidth = this.getSlider().clientWidth;
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
	    perSlide,
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
	    elementCreator({ tag: 'Span', wrapper: slider, className: 'control next' });
	    elementCreator({ tag: 'Span', wrapper: slider, className: 'control prev' });
	    this.sliderArrows = new SliderArrows({ core: this });
	    const index = this.getIndex();
	    if (perSlide === sliderLength) {
	      prevNone(slider);
	      nextNone(slider);
	    }
	    if (!infCheck) {
	      if (index === 0) {
	        prevNone(slider);
	      }
	    }
	  }

	  if (dots) {
	    elementCreator({ tag: 'Ul', wrapper: slider, className: 'dots' });
	    this.sliderDots = new SliderDots({ core: this });
	  }

	  if (autoPlay) {
	    setInterval(() => this.next(), 3000);
	  }

	  this.sliderTrailer = new SliderTrailer({ core: this });

	  // action drag event
	  this.dragEvent = new DragEvent({ core: this });

	  sliderSlidesSelector.addEventListener('transitionend', this.transitionendWatcherCall);
	  this.windowResizeWatcher();
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
	    config: {
	      slider,
	      responsive,
	      rtl,
	    },
	  } = this;
	  const classItemParams = {
	    item: childFider({
	      wrapper: slider,
	      className: '.slides',
	    }),
	    className: 'shifting',
	  };
	  addClassToElement(classItemParams);

	  this.setIndex(shiftSlideIsDir({
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
	  }));
	}

	transitionendWatcherCall = () => {
	  const {
	    config: {
	      slider,
	      responsive,
	      dots,
	      nav,
	      rtl,
	    },
	    getInfinite,
	    index,
	    getIndex,
	    setIndex,
	    dragAction,
	    setPosInitial,
	    setPosX1,
	    setAllowShift,
	    sliderItems,
	    slideSize,
	    sliderMainWidth,
	    slidesLength,
	    sliderItemWidth,
	  } = this;
	  transitionendWatcher({
	    slider,
	    infinite: getInfinite(),
	    responsive,
	    dots,
	    nav,
	    rtl,
	    sliderItems,
	    dragAction,
	    setPosInitial,
	    setPosX1,
	    setAllowShift,
	    index,
	    slideSize,
	    sliderMainWidth,
	    slidesLength,
	    sliderItemWidth,
	    setIndex,
	    getIndex,
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
=======
  setSliderItemWidth = (sliderItemWidth) => {
    this.sliderItemWidth = sliderItemWidth;
  };

  getSliderItemWidth = () => this.sliderItemWidth;

  setIndex = (index) => {
    this.index = index;
  };

  getIndex = () => this.index;

  setAllowShift = (allowShift) => {
    this.allowShift = allowShift;
  };

  getAllowShift = () => this.allowShift;

  updateLog = () => {
    console.log(this.index);
  };

  initialize = () => {
    const {
      slider,
      infinite,
      responsive,
      nav,
      dots,
      autoPlay,
      rtl,
    } = this.getConfig();

    removeAllChildren({
      wrapper: slider,
      className: 'clone',
    });
    // ----------- start init variables  -----
    this.setSlider(slider);

    const sliderClienWidth = this.getSlider().clientWidth;
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
    const slides = vdomArrayConvertor(this.getSliderItems().children);
    this.setSlidesLength(slides.length);

    const perSlide = switchInfiniteResponsiveCount(
      truncResponsiveItemCount(responsive),
      infinite,
    );

    this.setPerSlide(perSlide);

    // set init index
    if (infinite) {
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
      this.sliderArrows = new SliderArrows({ core: this });
      const index = this.getIndex();
      if (!infinite && index === 0) {
        prevNone(slider);
      }
    }

    if (dots) {
      elementCreator({ tag: 'Ul', wrapper: slider, className: 'dots' });
      this.sliderDots = new SliderDots({ core: this });
    }

    if (autoPlay) {
      setInterval(() => this.next(), 3000);
    }

    this.sliderTrailer = new SliderTrailer({ core: this });
    this.dragEvent = new DragEvent({ core: this });

    sliderSlidesSelector.addEventListener(
      'transitionend',
      this.transitionendWatcherCall,
    );
    this.windowResizeWatcher();
  };

  next() {
    const {
      sliderItems,
      index,
      perSlide,
      slideSize,
      slidesLength,
      sliderMainWidth,
      config: {
        infinite, slider, responsive, rtl,
      },
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
        infinite,
        slider,
        rtl,
      }),
    );
  }

  transitionendWatcherCall = () => {
    const {
      config: {
        slider, infinite, responsive, dots, nav, rtl,
      },
      index,
      getIndex,
      setIndex,
      dragAction,
      setPosInitial,
      setPosX1,
      setAllowShift,
      sliderItems,
      slideSize,
      sliderMainWidth,
      slidesLength,
      sliderItemWidth,
    } = this;
    transitionendWatcher({
      slider,
      infinite,
      responsive,
      dots,
      nav,
      rtl,
      sliderItems,
      dragAction,
      setPosInitial,
      setPosX1,
      setAllowShift,
      index,
      slideSize,
      sliderMainWidth,
      slidesLength,
      sliderItemWidth,
      setIndex,
      getIndex,
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
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882
}

export default SliderCore;
