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

export const shiftSlideIsDir = (params) => {
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
  const newSlidesLength = infinite ? slidesLength : slidesLength - 1;

  const calcFinalItemPositionParams = {
    slideSize,
    slidesLength,
    sliderMainWidth,
    perSlide,
    infinite,
  };
  const newIndex = index + perSlide;

<<<<<<< HEAD
  if (!infinite && newIndex + perSlide - 1 >= newSlidesLength && responsiveItem !== 1) {
=======
  if (
    !infinite
    && newIndex + perSlide - 1 >= newSlidesLength
    && responsiveItem !== 1
  ) {
>>>>>>> 2350cfad6f6e3899ef5e0b54404cbabc29a1d882
    const result = directionSetter({
      rtl,
      input: calcFinalItemPosition(calcFinalItemPositionParams),

    });
    sliderItems.style.transform = setTranslate3d(result);

    nextNone(slider);
    prevBlock(slider);

    return newIndex;
  }

  // if (!infinite && newIndex * perSlide >= slidesLength) {
  // 	sliderItems.style["transform"] = setTranslate3d(
  // 		calcFinalItemPosition(calcFinalItemPositionParams)
  // 	);
  // 	nextNone(slider);
  // 	prevBlock(slider);
  // }

  // when perSlide === 1
  if (!infinite && newIndex === newSlidesLength) {
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

export const shiftSlideNonDir = (params) => {
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

// export const shiftFirstToEnd = params => {
// 	const { sliderItems, slidesLength, slideSize, newIndex,rtl } = params;
// 	const result = directionSetter({
// 		rtl,
// 		input: -((slidesLength + newIndex) * slideSize)
// 	});
// 	sliderItems.style["transform"] = setTranslate3d(result);
// 	return slidesLength + newIndex;
// };

// export const shiftEndToFirst = params => {
// 	const { sliderItems, slideSize, newIndex, slidesLength,rtl } = params;
// 	const result = directionSetter({
// 		rtl,
// 		input: -(newIndex - slidesLength) * slideSize
// 	});
// 	sliderItems.style["transform"] = setTranslate3d(result);
// 	return newIndex - slidesLength;
// };
