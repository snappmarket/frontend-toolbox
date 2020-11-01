import {
  getTranslate3d,
  calcFinalItemPosition,
  setTranslate3d,
  directionSetter,
  responsiveItemCount,
  calcSliderChildWidth,
  truncResponsiveItemCount,
  calcCurrentIndex,
  prevBlock,
  prevNone,
  nextBlock,
  nextNone,
  addClassToElement,
  removeClassFromElement,
  calcAutoWidthAllSliderItems,
} from '../utils';

export const directionTouchClientX = params => {
  const { rtl, e, sliderMainWidth } = params;
  if (rtl) return sliderMainWidth - e.touches[0].clientX;
  return e.touches[0].clientX;
};

export const caroueslTouchStart = params => directionTouchClientX(params);
export const dragActionTouchmovePosX2 = params => {
  const { e, posX1, rtl, sliderMainWidth } = params;
  return posX1 - directionTouchClientX({ rtl, e, sliderMainWidth });
};

export const dragActionTouchmovePosX1 = params => directionTouchClientX(params);

export const directionClientX = params => {
  const { rtl, e, sliderMainWidth } = params;
  if (rtl) return sliderMainWidth - e.clientX;
  return e.clientX;
};

export const caroueslDragStart = params => {
  const { e, dragEndCall, dragActionCall, sliderMainWidth, rtl } = params;
  document.onmouseup = dragEndCall;
  document.onmousemove = dragActionCall;
  return directionClientX({ rtl, e, sliderMainWidth });
};

export const dragActionMousemove = params => {
  const { posX1, e, rtl, sliderMainWidth } = params;
  return posX1 - directionClientX({ rtl, e, sliderMainWidth });
};
export const dragActionMousemovePosX1 = ({ rtl, e, sliderMainWidth }) =>
  directionClientX({ rtl, e, sliderMainWidth });

// eslint-disable-next-line consistent-return
export const dragActionCalcPosition = params => {
  const {
    sliderItems,
    posX2,
    rtl,
    slidesLength,
    sliderItemWidth,
    perSlide,
    slideSize,
    sliderMainWidth,
    infinite,
    threshold,
    autoWidth,
  } = params;

  const posX2New = () => {
    if (rtl) return -posX2;
    return posX2;
  };
  const thresholdNew = () => {
    if (rtl) return -threshold;
    return threshold;
  };
  const sliderItemWidthNew = () => {
    if (rtl) return sliderItemWidth;
    return -sliderItemWidth;
  };
  const finalItemPosition = directionSetter({
    rtl,
    input: calcFinalItemPosition({
      slideSize,
      slidesLength,
      sliderMainWidth,
      perSlide,
      infinite,
      autoWidth,
      sliderItems,
    }),
  });

  // when slidesLength <= perSlide dragEvent is disable
  if (slidesLength <= perSlide) {
    return false;
  }

  if (!infinite && !rtl) {
    // stop drag when firstItem go to lastItem on drag
    const firstTolastDrag =
      getTranslate3d(sliderItems) - posX2New() >
      sliderItemWidthNew() * perSlide + thresholdNew();
    // stop drag when lastItem go to fistItem on drag
    const lastToFirstDrag =
      getTranslate3d(sliderItems) - posX2New() <=
      finalItemPosition - thresholdNew();
    if (firstTolastDrag || lastToFirstDrag) {
      return false;
    }
  }

  if (infinite && !rtl) {
    // stop drag when firstItem go to lastItem on drag
    const firstTolastDrag = getTranslate3d(sliderItems) - posX2New() > 0;
    // stop drag when lastItem go to fistItem on drag
    const lastToFirstDrag =
      getTranslate3d(sliderItems) - posX2New() + 5 <
      sliderItemWidthNew() * (slidesLength + perSlide + 1);

    if (firstTolastDrag || lastToFirstDrag) {
      return false;
    }
  }

  if (!infinite && rtl) {
    // stop drag when firstItem go to lastItem on drag
    const firstTolastDrag =
      getTranslate3d(sliderItems) - posX2New() <
      sliderItemWidthNew() * perSlide + thresholdNew();
    // stop drag when lastItem go to fistItem on drag
    const lastToFirstDrag =
      getTranslate3d(sliderItems) - posX2New() >=
      finalItemPosition - thresholdNew();

    if (firstTolastDrag || lastToFirstDrag) {
      return false;
    }
  }
  if (infinite && rtl) {
    // stop drag when firstItem go to lastItem on drag
    const firstTolastDrag = getTranslate3d(sliderItems) - posX2New() < 0;
    // stop drag when lastItem go to fistItem on drag
    const lastToFirstDrag =
      getTranslate3d(sliderItems) - posX2New() - 5 >
      sliderItemWidthNew() * (slidesLength + perSlide + 1);
    if (firstTolastDrag || lastToFirstDrag) {
      return false;
    }
  }

  const result = () => getTranslate3d(sliderItems) - posX2New();
  sliderItems.style.transform = setTranslate3d(result());
};

export const mouseEventNull = () => {
  document.onmouseup = null;
  document.onmousemove = null;
};

export const dragStart = params => {
  let { e } = params;
  const {
    sliderItems,
    dragEndCall,
    dragActionCall,
    setPosInitial,
    setPosX1,
    sliderMainWidth,
    rtl,
  } = params;

  e = e || window.event;
  const posInitial = getTranslate3d(sliderItems);
  if (e.type === 'touchstart') {
    setPosInitial(posInitial);
    setPosX1(
      caroueslTouchStart({
        e,
        rtl,
        sliderMainWidth,
      }),
    );
  } else {
    e.preventDefault();
    const dragActionParams = {
      e,
      rtl,
      dragEndCall,
      dragActionCall,
      sliderMainWidth,
    };
    setPosInitial(posInitial);
    setPosX1(caroueslDragStart(dragActionParams));
  }
};

// eslint-disable-next-line consistent-return
export const dragAction = params => {
  let { e } = params;
  const {
    getPosX1,
    setPosX1,
    setPosX2,
    rtl,
    getSliderItems,
    threshold,
    getPosX2,
    getSlidesLength,
    getPerSlide,
    responsive,
    getSlider,
    infinite,
    getSlideSize,
    getSliderMainWidth,
    autoWidth,
  } = params;
  const sliderMainWidth = getSliderMainWidth();
  e = e || window.event;
  const clientXParams = { e, rtl, sliderMainWidth };
  const perSlide = truncResponsiveItemCount(responsive);

  // when drag false or slidesLength <= perSlide dragEvent is disable
  if (getSlidesLength() <= perSlide) {
    return false;
  }

  if (autoWidth) {
    if (calcAutoWidthAllSliderItems(getSliderItems()) <= sliderMainWidth) {
      return false;
    }
  }

  const startAvoidClicks = Posx => {
    if (Math.abs(Posx) > 2) {
      addClassToElement({
        item: getSliderItems(),
        className: 'avoid-clicks',
      });
    }
    return Posx;
  };

  if (e.type === 'touchmove') {
    const dragActionTouchmovePosX2Params = {
      posX1: getPosX1(),
      ...clientXParams,
    };
    setPosX2(dragActionTouchmovePosX2(dragActionTouchmovePosX2Params));
    setPosX1(dragActionTouchmovePosX1(clientXParams));
    startAvoidClicks(dragActionTouchmovePosX2(dragActionTouchmovePosX2Params));
  } else {
    const dragActionMousemoveParams = {
      posX1: getPosX1(),
      ...clientXParams,
    };
    setPosX2(dragActionMousemove(dragActionMousemoveParams));
    setPosX1(dragActionMousemovePosX1(clientXParams));
    startAvoidClicks(dragActionMousemove(dragActionMousemoveParams));
  }

  const dragActionCalcPositionParams = {
    sliderItems: getSliderItems(),
    posX2: getPosX2(),
    slidesLength: getSlidesLength(),
    perSlide: getPerSlide(),
    sliderItemWidth: calcSliderChildWidth({
      responsiveItemCount: responsiveItemCount(responsive),
      slider: getSlider(),
    }),
    slideSize: getSlideSize(),
    sliderMainWidth,
    infinite,
    threshold,
    rtl,
    autoWidth,
  };
  dragActionCalcPosition(dragActionCalcPositionParams);
};

// eslint-disable-next-line consistent-return
export const dragEnd = params => {
  const {
    sliderItems,
    threshold,
    slidesLength,
    responsive,
    infinite,
    slideSize,
    sliderMainWidth,
    sliderItemWidth,
    setIndex,
    transitionendWatcherCall,
    slider,
    setPosFinal,
    getPosFinal,
    nav,
    rtl,
    autoWidth,
    freeScroll,
    index,
    startTrans,
  } = params;

  removeClassFromElement({
    item: sliderItems,
    className: 'avoid-clicks',
  });

  const perSlide = truncResponsiveItemCount(responsive);

  // when drag false or slidesLength <= perSlide dragEvent is disable
  if (slidesLength <= perSlide) {
    mouseEventNull();
    return false;
  }

  if (autoWidth) {
    if (calcAutoWidthAllSliderItems(sliderItems) <= sliderMainWidth) {
      return false;
    }
  }

  const thresholdNew = () => {
    if (rtl) return -threshold;
    return threshold;
  };

  const finalItemPosition = directionSetter({
    rtl,
    input: calcFinalItemPosition({
      slideSize,
      slidesLength,
      sliderMainWidth,
      perSlide,
      infinite,
      autoWidth,
      sliderItems,
    }),
  });
  setPosFinal(getTranslate3d(sliderItems));

  const calcIndex = calcCurrentIndex({
    sliderItems,
    infinite,
    perSlide,
    slideSize,
    sliderMainWidth,
    slidesLength,
    freeScroll,
    autoWidth,
    index,
    responsiveItemCount: responsiveItemCount(responsive),
  });

  const currentPosition = getTranslate3d(sliderItems);

  setIndex(calcIndex);

  if (
    (!infinite &&
      calcIndex > slidesLength &&
      calcIndex < slidesLength + perSlide) ||
    (infinite && calcIndex + perSlide === perSlide)
  ) {
    sliderItems.style.transform = setTranslate3d(finalItemPosition);
  }

  if (!infinite && nav) {
    prevBlock(slider);
    nextBlock(slider);
  }

  if (!infinite && calcIndex === slidesLength + perSlide) {
    sliderItems.style.transform = setTranslate3d(
      getPosFinal() - sliderItems.children[0].clientWidth,
    );
  }

  if (
    (!infinite &&
      getTranslate3d(sliderItems) <= thresholdNew() &&
      getTranslate3d(sliderItems) >= 0) ||
    (rtl && getTranslate3d(sliderItems) <= 0)
  ) {
    sliderItems.style.transform = setTranslate3d(0);
    if (nav) {
      prevNone(slider);
      nextBlock(slider);
    }
  }

  if (!infinite && !rtl && getTranslate3d(sliderItems) <= finalItemPosition) {
    sliderItems.style.transform = setTranslate3d(finalItemPosition);
    if (nav) {
      nextNone(slider);
      prevBlock(slider);
    }
  }

  if (!infinite && rtl && getTranslate3d(sliderItems) >= finalItemPosition) {
    sliderItems.style.transform = setTranslate3d(finalItemPosition);
    if (nav) {
      nextNone(slider);
      prevBlock(slider);
    }
  }

  if (
    !infinite &&
    Math.abs(currentPosition) < Math.abs(finalItemPosition) &&
    currentPosition > 0 &&
    startTrans !== currentPosition &&
    !freeScroll &&
    !autoWidth
  ) {
    addClassToElement({
      item: sliderItems,
      className: 'soft-transition',
    });
    const result = directionSetter({
      rtl,
      input: -sliderItemWidth * calcIndex,
    });
    sliderItems.style.transform = setTranslate3d(result);
    setTimeout(() => {
      removeClassFromElement({
        item: sliderItems,
        className: 'soft-transition',
      });
    }, 300);
  }

  mouseEventNull();
  transitionendWatcherCall();
};
