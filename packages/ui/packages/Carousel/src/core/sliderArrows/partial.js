import {
  setTranslate3d,
  calcFinalItemPosition,
  nextNone,
  prevBlock,
  nextBlock,
  prevNone,
  calcFirstItemPosition,
  directionSetter,
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
  } = params;

  const calcFinalItemPositionParams = {
    slideSize,
    slidesLength,
    sliderMainWidth,
    perSlide,
    infinite,
  };
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
  } = params;
  const newIndex = index - perSlide;
  const infinitperSlide = infinite ? perSlide : 0;

  if (!infinite && index - infinitperSlide <= perSlide && index !== -1) {
    const calcFirstItemPositionParams = { slideSize, perSlide, infinite };
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
