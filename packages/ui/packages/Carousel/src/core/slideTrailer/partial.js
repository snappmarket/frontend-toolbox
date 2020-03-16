
import {
	truncResponsiveItemCount,
	vdomArrayConvertor,
} from '../utils';

export const setPageNumberOnChild = params => {
	const { sliderItems, responsive } = params;
	const perSlide = truncResponsiveItemCount(responsive);
	vdomArrayConvertor(sliderItems.children).forEach((item, itemIndex) => {
		item.setAttribute("data-page", Math.trunc(itemIndex / perSlide) + 1);
	});
};

export const addCloneClass = item => {
  item.classList.add("clone");
};

export const cloneNodeGenerator = params => {
	const { perSlide, sliderItems } = params;
	const sliderItemsChildren = vdomArrayConvertor(sliderItems.children);
	const deepCloneSliderItemsChildren = [...sliderItemsChildren];
	const cloneNodeParams = {
		perSlide,
		deepCloneSliderItemsChildren,
		sliderItems
	};
	cloneNodeAppendChild(cloneNodeParams);
	cloneNodeInsertBefore(cloneNodeParams);
};

export const cloneNodeAppendChild = params => {
	const { perSlide, deepCloneSliderItemsChildren, sliderItems } = params;
	deepCloneSliderItemsChildren.forEach((element, index) => {
		if (index <= perSlide) {
			const cln = element.cloneNode(true);
			addCloneClass(cln);
			sliderItems.appendChild(cln);
		}
	});
};

export const cloneNodeInsertBefore = params => {
	const { perSlide, deepCloneSliderItemsChildren, sliderItems } = params;
	for (
		let i = deepCloneSliderItemsChildren.length - perSlide -1;
		i < deepCloneSliderItemsChildren.length;
		i++
	) {
		const cln = deepCloneSliderItemsChildren[i].cloneNode(true);
		addCloneClass(cln);
		sliderItems.insertBefore(cln, deepCloneSliderItemsChildren[0]);
	}
};