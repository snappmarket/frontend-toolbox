export const addClassToElement = params => {
  const { item, className } = params;
  item.classList.add(className);
  return item;
};

export const removeClassFromElement = params => {
  const { item, className } = params;
  item.classList.remove(className);
  return item;
};

export const isFloat = n => Number(n) === n && n % 1 !== 0;

// eslint-disable-next-line consistent-return
export const calcCurrentIndex = params => {
  const {
    sliderItems,
    infinite,
    perSlide,
    slideSize,
    sliderMainWidth,
    slidesLength,
    freeScroll,
    autoWidth,
    responsiveItemCount,
  } = params;

  const getIndex =
    getTranslate3d(sliderItems) /
    vdomArrayConvertor(sliderItems.children)[0].clientWidth;

  if (infinite) {
    if (getIndex >= 0) return Math.round(getIndex);
    if (getIndex < 0) {
      return slidesLength + Math.round(getIndex);
    }
  }

  if (Math.abs(getTranslate3d(sliderItems)) <= 1) {
    return 0;
  }

  if (Math.abs(getTranslate3d(sliderItems)) > 0) {
    const scroll = Math.abs(getTranslate3d(sliderItems));
    if (!freeScroll && !autoWidth && !isFloat(responsiveItemCount)) {
      return Math.round((scroll + sliderMainWidth) / slideSize - perSlide);
    }
    return Math.trunc((scroll + sliderMainWidth) / slideSize - perSlide);
  }
};

export const setActiveclassToCurrent = params => {
  const { sliderItems, perSlide } = params;
  const activeIndex = calcCurrentIndex(params);
  const activeItems = [];
  [...Array(perSlide).keys()].forEach(item =>
    activeItems.push(item + activeIndex),
  );
  vdomArrayConvertor(sliderItems.children).forEach((item, itemIndex) => {
    const classItemParams = {
      item,
      className: 'active',
    };

    if (activeItems.includes(itemIndex)) {
      addClassToElement(classItemParams);
    } else {
      removeClassFromElement(classItemParams);
    }
  });
};

export const sliderClientWidth = slider => slider.clientWidth;

export const truncResponsiveItemCount = responsive =>
  Math.trunc(responsiveItemCount(responsive));

export const calcFinalItemPosition = params => {
  const { autoWidth } = params;
  if (autoWidth) {
    return calcFinalWidthAutoWidth(params);
  }
  return calcFinalWithoutAutoWidth(params);
};

export const calcFinalWidthAutoWidth = params => {
  const { sliderMainWidth, sliderItems } = params;
  return sliderMainWidth - calcAutoWidthAllSliderItems(sliderItems);
};

export const calcFinalWithoutAutoWidth = params => {
  const {
    slideSize,
    sliderMainWidth,
    perSlide,
    slidesLength,
    infinite,
  } = params;
  const infiniteSlideLength = infinite
    ? slidesLength + perSlide + 1
    : slidesLength;
  const box = perSlide * slideSize;
  const cost = sliderMainWidth - box;
  const finalResult = (infiniteSlideLength - perSlide) * slideSize - cost;
  return -finalResult;
};

export const calcFirstItemPosition = params => {
  const { slideSize, perSlide, infinite, autoWidth } = params;
  if (autoWidth) {
    return 0;
  }
  const infiSwitchSlideSize = infinite ? slideSize : 0;
  return -(infiSwitchSlideSize * (perSlide + 1));
};

export const calcSliderGroupCount = params => {
  const {
    slidesLength,
    responsive,
    autoWidth,
    sliderItems,
    sliderMainWidth,
  } = params;
  if (autoWidth) {
    return Math.ceil(
      calcAutoWidthAllSliderItems(sliderItems) / sliderMainWidth,
    );
  }
  return Math.ceil(slidesLength / truncResponsiveItemCount(responsive));
};

export const calcSliderChildWidth = params => {
  const { responsiveItemCount, slider } = params;
  return sliderClientWidth(slider) / responsiveItemCount;
};

export const setSliderItemsChildWidth = params => {
  const { responsive, slider, sliderItems, autoWidth } = params;

  vdomArrayConvertor(sliderItems.children).forEach(child => {
    const newChild = child;
    /* eslint-disable indent */
    newChild.style.width = !autoWidth
      ? `${calcSliderChildWidth({
          responsiveItemCount: responsiveItemCount(responsive),
          slider,
        })}px`
      : `auto`;
    /* eslint-enable indent */
  });
};

export const calcAutoWidthAllSliderItems = sliderItems => {
  let allChildWidth = 0;
  vdomArrayConvertor(sliderItems.children).forEach(child => {
    allChildWidth += child.offsetWidth;
  });
  return allChildWidth;
};

export const setSliderItemsPosition = params => {
  const { indexItem, sliderItemWidth, sliderItems, rtl } = params;
  const result = directionSetter({
    rtl,
    input: indexItem * -sliderItemWidth,
  });
  sliderItems.style.transform = setTranslate3d(result);
  return indexItem;
};

export const directionSetter = params => {
  const { rtl, input } = params;
  if (rtl) {
    return -input;
  }
  return input;
};

export const setTranslate3d = getValue => `translate3d(${getValue}px,0px,0px)`;

export const getTranslate3d = sliderItems => {
  const values = sliderItems.style.transform.match(
    /translate3d\((.*)px, (.*)px, (.*)px\)/,
  );
  if (!values[1] || !values[1].length) {
    return 0;
  }
  return parseFloat(values[1]);
};

export const arrGenerator = (arr, part) => {
  const partTrunc = Math.trunc(part);
  const round = Math.ceil(arr.length / partTrunc);
  let counter = 0;
  const newArry = [];
  // eslint-disable-next-line no-plusplus
  for (counter; round > counter; counter++) {
    newArry[counter] = arr.slice(
      counter * partTrunc,
      (counter + 1) * partTrunc,
    );
  }
  return newArry;
};

export const sorter = (a, b) => {
  if (a < b) return -1; // any negative number works
  if (a > b) return 1; // any positive number works
  return 0; // equal values MUST yield zero
};

export const responsiveItemCount = getConfig => {
  const resp = Object.keys(getConfig).map(el => parseInt(el, 10));
  const newResp = resp
    .sort(sorter)
    .filter(item => item <= document.body.clientWidth);
  return getConfig[parseInt(newResp.pop(), 10)].items;
};

export const switchInfiniteResponsiveCount = (itemCont, infinite) =>
  infinite ? itemCont : 0;

export const prevNone = slider => {
  const childFind = childFider({
    wrapper: slider,
    className: '.prev',
  });
  childFind.style.display = 'none';
  return childFind;
};

export const prevBlock = slider => {
  const childFind = childFider({
    wrapper: slider,
    className: '.prev',
  });
  childFind.style.display = 'flex';
  return childFind;
};

export const nextNone = slider => {
  const childFind = childFider({
    wrapper: slider,
    className: '.next',
  });
  childFind.style.display = 'none';
  return childFind;
};
export const nextBlock = slider => {
  const childFind = childFider({
    wrapper: slider,
    className: '.next',
  });
  childFind.style.display = 'flex';
  return childFind;
};

export const transitionendWatcher = params => {
  const {
    responsive,
    infinite,
    slider,
    rtl,
    index,
    sliderItems,
    slideSize,
    sliderMainWidth,
    setAllowShift,
    dots,
    slidesLength,
    sliderItemWidth,
    nav,
    setIndex,
    autoWidth,
    freeScroll,
    callBack,
  } = params;

  const perSlide = truncResponsiveItemCount(responsive);

  const calcIndex = calcCurrentIndex({
    infinite,
    perSlide: truncResponsiveItemCount(responsive),
    slidesLength,
    slideSize,
    sliderMainWidth,
    slider,
    sliderItems,
    freeScroll,
    autoWidth,
  });
  setIndex(calcIndex);
  if (
    infinite &&
    !autoWidth &&
    calcIndex > perSlide + slidesLength &&
    Math.abs(getTranslate3d(sliderItems)) >=
      (perSlide + 1 + slidesLength) * sliderItemWidth
  ) {
    return setIndex(
      setSliderItemsPosition({
        indexItem: calcIndex - slidesLength,
        sliderItemWidth,
        sliderItems,
        rtl,
      }),
    );
  }

  // if page-index === 1 && clone === true
  if (infinite && !autoWidth && calcIndex === perSlide + 1 + slidesLength) {
    return setIndex(
      setSliderItemsPosition({
        indexItem: perSlide + 1,
        sliderItemWidth,
        sliderItems,
        rtl,
      }),
    );
  }

  // shift to end from start item
  if (
    infinite &&
    !autoWidth &&
    (Math.abs(getTranslate3d(sliderItems)) <= 1 ||
      Math.abs(getTranslate3d(sliderItems)) === sliderItemWidth)
  ) {
    return setIndex(
      setSliderItemsPosition({
        indexItem: slidesLength + calcIndex,
        sliderItemWidth,
        sliderItems,
        rtl,
      }),
    );
  }

  if (!infinite && nav) {
    const finalPos = {
      slideSize,
      sliderMainWidth,
      perSlide,
      slidesLength,
      infinite,
      autoWidth,
      sliderItems,
    };
    const finalConst = Math.abs(Math.trunc(calcFinalItemPosition(finalPos)));
    const firstConst = Math.abs(Math.trunc(calcFirstItemPosition(finalPos)));
    const translate3dConst = Math.abs(Math.trunc(getTranslate3d(sliderItems)));
    let showNext = true;
    let showPrev = true;
    if (finalConst <= translate3dConst + 50) {
      showNext = false;
    }
    if (!autoWidth) {
      if (index === 0) {
        showPrev = false;
      }
    }
    if (firstConst >= translate3dConst - 50) {
      showPrev = false;
    }
    if (showNext) {
      nextBlock(slider);
    } else {
      nextNone(slider);
    }
    if (showPrev) {
      prevBlock(slider);
    } else {
      prevNone(slider);
    }
  }

  // run for set active class
  removeClassFromElement({
    item: sliderItems,
    className: 'shifting',
  });

  if (!autoWidth) {
    setActiveclassToCurrent({
      index,
      sliderItems,
      perSlide,
      infinite,
      slideSize,
      sliderMainWidth,
      autoWidth,
      freeScroll,
    });
  }
  setAllowShift(true);

  if (dots) {
    dotActive(params);
  }
  callBack(calcIndex);
  return calcIndex;
};

export const dotActive = params => {
  const { sliderItems, slider, autoWidth, sliderMainWidth } = params;
  const dotsSelector = childFider({
    wrapper: slider,
    className: '.dots',
  });

  const dotConvertor = vdomArrayConvertor(dotsSelector.children);
  let currentDot = null;

  if (autoWidth) {
    const dotIndex = Math.ceil(
      Math.abs(getTranslate3d(sliderItems)) / sliderMainWidth,
    );
    currentDot = dotConvertor[dotIndex];
  }

  if (activeChecker(sliderItems) >= 0 && !autoWidth) {
    currentDot = dotConvertor[activeChecker(sliderItems)];
  }

  if ((autoWidth || activeChecker(sliderItems) >= 0) && currentDot) {
    dotConvertor.forEach(child => {
      const classItemParams = {
        item: child,
        className: 'active',
      };
      removeClassFromElement(classItemParams);
    });
    const classItemParams = {
      item: currentDot,
      className: 'active',
    };
    addClassToElement(classItemParams);
  }
};

export const elementCreator = params => {
  const { tag, wrapper, className } = params;
  removeAllChildren({ wrapper, className });
  const node = document.createElement(tag);
  node.className = className;
  wrapper.appendChild(node);
  return node;
};

export const childFider = params => {
  const { wrapper, className } = params;
  return wrapper.querySelector(className);
};

export const removeAllChildren = params => {
  const { wrapper, className } = params;
  const newClassName = `.${className.split(' ').pop()}`;
  const findElements = wrapper.querySelectorAll(newClassName);
  if (findElements.length) {
    findElements.forEach(child => {
      child.remove();
    });
  }
  return findElements.length;
};

export const activeChecker = sliderItems => {
  const activeChild = [];
  vdomArrayConvertor(sliderItems.children).forEach(child => {
    if (child.classList.contains('active')) {
      activeChild.push(child.dataset.page);
    }
  });
  return parseInt(activeChild.sort().pop() - 1, 10);
};

export const vdomArrayConvertor = items => {
  const isArrayCheck = Array.isArray(items);
  if (isArrayCheck) return items;
  return Object.values(items);
};

export const infiniteChecker = params => {
  const { infinite, sliderLength, perSlide } = params;
  if (infinite && sliderLength === perSlide) {
    return false;
  }
  return infinite;
};

export const dragChecker = params => {
  const { drag, sliderLength, perSlide } = params;
  if (drag === false || sliderLength <= perSlide) {
    return false;
  }
  return drag;
};
