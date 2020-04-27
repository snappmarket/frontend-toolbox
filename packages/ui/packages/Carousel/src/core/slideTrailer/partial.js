import { truncResponsiveItemCount, vdomArrayConvertor } from '../utils';

export const setPageNumberOnChild = params => {
  const { sliderItems, responsive } = params;
  const perSlide = truncResponsiveItemCount(responsive);
  const newArrChild = [];
  vdomArrayConvertor(sliderItems.children).forEach((item, itemIndex) => {
    item.setAttribute('data-page', Math.trunc(itemIndex / perSlide) + 1);
    newArrChild.push(item.getAttribute('data-page'));
  });
  return newArrChild;
};

export const addCloneClass = item => {
  item.classList.add('clone');
  return item;
};

export const cloneNodeGenerator = params => {
  const { perSlide, sliderItems } = params;
  const sliderItemsChildren = vdomArrayConvertor(sliderItems.children);
  const deepCloneSliderItemsChildren = [...sliderItemsChildren];
  const cloneNodeParams = {
    perSlide,
    deepCloneSliderItemsChildren,
    sliderItems,
  };
  cloneNodeAppendChild(cloneNodeParams);
  cloneNodeInsertBefore(cloneNodeParams);
};

export const cloneNodeAppendChild = params => {
  const { perSlide, deepCloneSliderItemsChildren, sliderItems } = params;
  const newArrChild = [];
  deepCloneSliderItemsChildren.forEach((element, index) => {
    if (index <= perSlide) {
      const cln = element.cloneNode(true);
      addCloneClass(cln);
      newArrChild.push(index);
      sliderItems.appendChild(cln);
    }
  });
  return newArrChild;
};

export const cloneNodeInsertBefore = params => {
  const { perSlide, deepCloneSliderItemsChildren, sliderItems } = params;
  const itemsChildrenLength =
    deepCloneSliderItemsChildren.length - perSlide - 1;
  deepCloneSliderItemsChildren.forEach((element, index) => {
    if (index >= itemsChildrenLength) {
      const cln = element.cloneNode(true);
      addCloneClass(cln);
      sliderItems.insertBefore(cln, deepCloneSliderItemsChildren[0]);
    }
  });
};
