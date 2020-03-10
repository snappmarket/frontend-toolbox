import { dragAction, dragEnd, dragStart } from './partial';

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
      config: { infinite, responsive, threshold, rtl },
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
      setIndex,
      setPosFinal,
      getPosFinal,
      setAllowShift,
      transitionendWatcherCall,
    } = this.core;

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
        setIndex,
        setPosFinal,
        transitionendWatcherCall,
        dragAction,
        setPosInitial,
        setPosX1,
        setAllowShift,
        index: getIndex(),
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
        sliderItems: getSliderItems(),
        setPosInitial,
        setPosX1,
        dragEndCall,
        dragActionCall: e => dragActionCall(e),
        sliderMainWidth: getSliderMainWidth(),
        rtl,
      };
      dragStart(dragStartParams);
    };

    // Mouse events
    getSliderItems().onmousedown = dragStartCall;
    // Touch events
    getSliderItems().addEventListener('touchstart', dragStartCall);
    getSliderItems().addEventListener('touchend', dragEndCall);
    getSliderItems().addEventListener('touchmove', dragActionCall);
  }
}
