/* eslint-disable no-plusplus */
import {
  calcSliderGroupCount,
  getTranslate3d,
  calcFinalItemPosition,
  calcFirstItemPosition,
  setTranslate3d,
  nextNone,
  prevBlock,
  nextBlock,
  prevNone,
  addClassToElement,
  directionSetter,
  calcAutoWidthAllSliderItems,
} from '../utils';

export const dotsItemsGenerator = params => {
  const { dotsSelector } = params;
  for (let i = 0; i < calcSliderGroupCount(params); i++) {
    dotsSelector.innerHTML += `<li class="dots-item${
      !i ? ' active' : ''
    }" data-dot-index="${i + 1}">${i + 1}</li>`;
  }
  return dotsSelector;
};

export const dotsItemsClick = params => {
  const {
    indexItem,
    perSlide,
    sliderItems,
    infinite,
    getSliderItems,
    item,
  } = params;

  setSliderItemsPositionAfterDotClick(params);

  const isActive = item.classList.contains('active');
  let allowShift = true;
  if (!isActive) {
    const itemClassParams = {
      item: getSliderItems(),
      className: 'shifting',
    };
    addClassToElement(itemClassParams);
    allowShift = false;
  }
  return {
    index: infinite ? indexItem + perSlide + 1 : indexItem,
    allowShift,
    posInitial: getTranslate3d(sliderItems),
  };
};

// eslint-disable-next-line consistent-return
export const setSliderItemsPositionAfterDotClick = params => {
  const {
    indexItem,
    slideSize,
    sliderItems,
    sliderMainWidth,
    perSlide,
    slidesLength,
    infinite,
    slider,
    nav,
    rtl,
    autoWidth,
  } = params;
  const finalItemPosition = calcFinalItemPosition(params);

  // when slidesLength <= perSlide dots is disable
  if (
    slidesLength <= perSlide ||
    (autoWidth && calcAutoWidthAllSliderItems(sliderItems) <= sliderMainWidth)
  ) {
    return false;
  }

  if (autoWidth) {
    AfterDotClickAutoWidth(params);
  }

  if (!autoWidth) {
    if (!infinite && indexItem + perSlide >= slidesLength) {
      const result = directionSetter({
        rtl,
        input: finalItemPosition,
      });
      sliderItems.style.transform = setTranslate3d(result);
      if (nav) {
        nextNone(slider);
        prevBlock(slider);
      }
      return true;
    }

    // after time move to watcher
    if (nav) {
      nextBlock(slider);
      prevBlock(slider);
    }

    if (!infinite && nav && indexItem === 0) {
      nextBlock(slider);
      prevNone(slider);
    }
    const newItemIndex = infinite ? indexItem + perSlide + 1 : indexItem;
    const result = directionSetter({
      rtl,
      input: newItemIndex * -slideSize,
    });
    sliderItems.style.transform = setTranslate3d(result);
  }
};

export const AfterDotClickAutoWidth = params => {
  const { sliderItems, sliderMainWidth, slider, nav, rtl, dotIndex } = params;
  const firstItemPosition = calcFirstItemPosition(params);
  const finalItemPosition = calcFinalItemPosition(params);
  if (
    dotIndex * sliderMainWidth >=
    Math.abs(calcAutoWidthAllSliderItems(sliderItems))
  ) {
    const result = directionSetter({
      rtl,
      input: finalItemPosition,
    });
    sliderItems.style.transform = setTranslate3d(result);
    if (nav) {
      nextNone(slider);
      prevBlock(slider);
    }
    return true;
  }

  if ((dotIndex - 1) * sliderMainWidth === firstItemPosition) {
    nextBlock(slider);
    prevNone(slider);
  }
  const result = directionSetter({
    rtl,
    input: (dotIndex - 1) * -sliderMainWidth,
  });
  sliderItems.style.transform = setTranslate3d(result);
  return result;
};
