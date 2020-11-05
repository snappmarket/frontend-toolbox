import { dragAction, dragEnd, dragStart } from './partial';
import { getTranslate3d } from '../utils';

export default class DragEvent {
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
      config: { responsive, threshold, rtl, nav, autoWidth, freeScroll },
      getDrag,
      getInfinite,
      getSliderItems,
      setPosInitial,
      setPosX1,
      getPosX1,
      setPosX2,
      getPosX2,
      getSlider,
      getPerSlide,
      getSlidesLength,
      getIndex,
      getSlideSize,
      getSliderMainWidth,
      getSliderItemWidth,
      setIndex,
      setPosFinal,
      getPosFinal,
      setAllowShift,
      transitionendWatcherCall,
    } = this.core;

    const infinite = getInfinite();
    const sliderItems = getSliderItems();
    const drag = getDrag();
    let startTrans = null;

    const dragEndCall = () => {
      const dragStartParams = {
        sliderItems: getSliderItems(),
        slidesLength: getSlidesLength(),
        slideSize: getSlideSize(),
        sliderMainWidth: getSliderMainWidth(),
        slider: getSlider(),
        posFinal: getPosFinal(),
        threshold,
        responsive,
        infinite,
        rtl,
        nav,
        autoWidth,
        setIndex,
        setPosFinal,
        transitionendWatcherCall,
        dragAction,
        drag,
        setPosInitial,
        setPosX1,
        setAllowShift,
        index: getIndex(),
        sliderItemWidth: getSliderItemWidth(),
        freeScroll,
        startTrans,
      };
      dragEnd(dragStartParams);
    };

    const dragActionCall = e => {
      const dragActionParams = {
        e,
        getPosX1,
        setPosX1,
        setPosX2,
        setPosInitial,
        getSliderItems,
        threshold,
        rtl,
        autoWidth,
        getPosX2,
        getSlidesLength,
        getPerSlide,
        responsive,
        getSlider,
        infinite,
        getSlideSize,
        getSliderMainWidth,
      };
      dragAction(dragActionParams);
    };

    const dragStartCall = e => {
      const dragStartParams = {
        e,
        sliderItems,
        setPosInitial,
        setPosX1,
        dragEndCall,
        dragActionCall,
        sliderMainWidth: getSliderMainWidth(),
        rtl,
        autoWidth,
      };
      startTrans = getTranslate3d(sliderItems);
      dragStart(dragStartParams);
    };

    // Mouse events
    sliderItems.addEventListener('mousedown', dragStartCall);

    // Touch events
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return
        get() {
          supportsPassive = true;
        },
      });
      window.addEventListener("testPassive", null, opts);
      window.removeEventListener("testPassive", null, opts);
      // eslint-disable-next-line no-empty
    } catch (e) {}

    sliderItems.addEventListener('touchstart', dragStartCall, supportsPassive ? { passive: true } : false);
    sliderItems.addEventListener('touchend', dragEndCall);
    sliderItems.addEventListener('touchmove', dragActionCall);
  }
}
