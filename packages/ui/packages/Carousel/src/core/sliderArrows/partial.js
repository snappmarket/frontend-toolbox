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

  const FinalItemPosition = calcFinalItemPosition({
    slideSize,
    slidesLength,
    sliderMainWidth,
    perSlide,
    infinite,
    autoWidth,
    sliderItems,
  });

  if(autoWidth) {
    return shiftSlideIsDirAutoWidth({
      rtl,
      sliderMainWidth,
      sliderItems,
      infinite,
      FinalItemPosition,
      slider,
      index,
    })
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
      input: FinalItemPosition,
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

  const firstItemPosition = calcFirstItemPosition({ slideSize, perSlide, infinite, autoWidth });

  if(autoWidth) {
    return shiftSlideNonDirAutoWidth({
      rtl,
      sliderMainWidth,
      sliderItems,
      infinite,
      firstItemPosition,
      slider,
      index,
    });
  }

  const newIndex = index - perSlide;
  const infinitperSlide = infinite ? perSlide : 0;

  if (!infinite && index - infinitperSlide <= perSlide && index !== -1) {
    const result = directionSetter({
      rtl,
      input: firstItemPosition,
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

export const shiftSlideNonDirAutoWidth = params => {
  const {
    rtl,
    sliderMainWidth,
    sliderItems,
    infinite,
    firstItemPosition,
    slider,
    index,
  } = params;
  const result = directionSetter({
    rtl,
    input: Math.abs(getTranslate3d(sliderItems)) - sliderMainWidth,
  });
  if(!infinite && (
    (!rtl && result <= firstItemPosition) ||
    (rtl && result >= firstItemPosition)
  )){
    nextBlock(slider);
    prevNone(slider);
    sliderItems.style.transform = setTranslate3d(firstItemPosition);
    return index;
  }
  sliderItems.style.transform = setTranslate3d(-result);
  return index;
}

export const shiftSlideIsDirAutoWidth = params => {
  const {
    rtl,
    sliderMainWidth,
    sliderItems,
    infinite,
    FinalItemPosition,
    slider,
    index,
  } = params;
  const result = directionSetter({
    rtl,
    input: sliderMainWidth + Math.abs(getTranslate3d(sliderItems)),
  });

  if(!infinite && Math.abs(result) >= Math.abs(FinalItemPosition)){
    sliderItems.style.transform = setTranslate3d(directionSetter({
      rtl,
      input: FinalItemPosition,
    }));
    nextNone(slider);
    prevBlock(slider);
    return index;
  }

  sliderItems.style.transform = setTranslate3d(-result);
  return index;
}