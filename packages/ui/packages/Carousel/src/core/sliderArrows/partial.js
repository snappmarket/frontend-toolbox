import {
  setTranslate3d,
  calcFinalItemPosition,
  nextNone,
  prevBlock,
  nextBlock,
  prevNone,
  calcFirstItemPosition,
  directionSetter,
  getTranslate3d,
} from '../utils';

export const shiftSlideIsDir = params => {
  const {
    sliderItems,
    index,
    perSlide,
    slideSize,
    slidesLength,
    sliderMainWidth,
    responsiveItem,
    infinite,
    slider,
    rtl,
    autoWidth,
  } = params;

  const calcFinalItemPositionParams = {
    slideSize,
    slidesLength,
    sliderMainWidth,
    perSlide,
    infinite,
    autoWidth,
    sliderItems,
  };

  if(autoWidth) {
    const result = directionSetter({
      rtl,
      input: sliderMainWidth + Math.abs(getTranslate3d(sliderItems)),
    });

    if(!infinite && 
      Math.abs(result) >= Math.abs(calcFinalItemPosition(calcFinalItemPositionParams))
    ){
      sliderItems.style.transform = setTranslate3d(directionSetter({
        rtl,
        input: calcFinalItemPosition(calcFinalItemPositionParams),
      }));

      nextNone(slider);
      prevBlock(slider);
      return index;
    }
    sliderItems.style.transform = setTranslate3d(-result);
    return index;
  }
  
  const newIndex = index + perSlide;
  // when slidesLength <= perSlide arrow is disable
  if (slidesLength <= perSlide) {
    nextNone(slider);
    prevBlock(slider);
    return index;
  }

  if (
    !infinite &&
    newIndex + perSlide - 1 >= slidesLength - 1 &&
    responsiveItem !== 1
  ) {
    const result = directionSetter({
      rtl,
      input: calcFinalItemPosition(calcFinalItemPositionParams),
    });
    sliderItems.style.transform = setTranslate3d(result);

    nextNone(slider);
    prevBlock(slider);

    return newIndex;
  }

  // when perSlide === 1
  if (!infinite && newIndex === slidesLength - 1) {
    nextNone(slider);
    prevBlock(slider);
  }

  const result = directionSetter({
    rtl,
    input: newIndex * -slideSize,
  });

  sliderItems.style.transform = setTranslate3d(result);
  return newIndex;
};

export const shiftSlideNonDir = params => {
  const {
    sliderItems,
    slideSize,
    index,
    perSlide,
    infinite,
    slider,
    rtl,
    autoWidth,
    sliderMainWidth,
  } = params;

  if(autoWidth) {
    const calcFirstItemPositionParams = { slideSize, perSlide, infinite, autoWidth };
    const result = directionSetter({
      rtl,
      input: Math.abs(getTranslate3d(sliderItems)) - sliderMainWidth,
    });
    if(!infinite && (
      (!rtl && result <= calcFirstItemPosition(calcFirstItemPositionParams)) ||
      (rtl && result >= calcFirstItemPosition(calcFirstItemPositionParams))
    )){
      nextBlock(slider);
      prevNone(slider);
      sliderItems.style.transform = setTranslate3d(calcFirstItemPosition(calcFirstItemPositionParams));
      return index;
    }
    sliderItems.style.transform = setTranslate3d(-result);
    return index;
  }

  const newIndex = index - perSlide;
  const infinitperSlide = infinite ? perSlide : 0;

  if (!infinite && index - infinitperSlide <= perSlide && index !== -1) {
    const calcFirstItemPositionParams = { slideSize, perSlide, infinite, autoWidth };
    const result = directionSetter({
      rtl,
      input: calcFirstItemPosition(calcFirstItemPositionParams),
    });
    sliderItems.style.transform = setTranslate3d(result);
    nextBlock(slider);
    prevNone(slider);
    return newIndex;
  }

  const result = directionSetter({
    rtl,
    input: -newIndex * slideSize,
  });
  sliderItems.style.transform = setTranslate3d(result);
  return newIndex;
};