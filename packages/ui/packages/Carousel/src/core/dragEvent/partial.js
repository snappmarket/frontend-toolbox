import {
	getTranslate3d,
	calcFinalItemPosition,
	setTranslate3d,
	directionSetter,
	responsiveItemCount,
	calcSliderChildWidth,
	truncResponsiveItemCount,
	calcCurrentIndex,
	prevBlock,
	prevNone,
	nextBlock,
	nextNone
} from '../utils';

export const directionClientX = (params) => {
	const {rtl,e,sliderMainWidth} = params;
	if(rtl) return sliderMainWidth - e.clientX;
  return e.clientX;	
};

export const directionTouchClientX = (params) => {
	const {rtl,e,sliderMainWidth} = params;
	if(rtl) return sliderMainWidth - e.touches[0].clientX;
  return e.touches[0].clientX;	
};

export const caroueslTouchStart = (params) => directionTouchClientX(params);

export const caroueslDragAction = params => {
  const { e, dragEndCall, dragActionCall,sliderMainWidth,rtl } = params;
  document.onmouseup = dragEndCall;
	document.onmousemove = dragActionCall;
	return directionClientX({rtl,e,sliderMainWidth});
};
export const dragActionTouchmovePosX2 = params => {
  const { e, posX1,rtl,sliderMainWidth } = params;
  return posX1 - directionTouchClientX({rtl,e,sliderMainWidth});
};

export const dragActionTouchmovePosX1 = params => directionTouchClientX(params);

export const dragActionMousemove = params => {
  const { posX1, e,rtl, sliderMainWidth} = params;
  return posX1 - directionClientX({rtl,e,sliderMainWidth});
};
export const dragActionMousemovePosX1 = ({rtl,e,sliderMainWidth}) => directionClientX({rtl,e,sliderMainWidth});

export const dragActionCalcPosition = params => {
  const {
    sliderItems,
		posX2,
		rtl,
    slidesLength,
    sliderItemWidth,
    perSlide,
    slideSize,
    sliderMainWidth,
    infinite,
    threshold,
	} = params;
	
	const posX2New = () => {
		if(rtl) return -posX2;
		return posX2;
	};
	const thresholdNew = () => {
		if(rtl) return -threshold;
		return threshold;
	};
	const sliderItemWidthNew = () => {
		if(rtl) return sliderItemWidth;
		return -sliderItemWidth;
	};
	const calcFinalItemPositionNew = directionSetter({
		rtl,
		input: calcFinalItemPosition({
      slideSize,
      slidesLength,
      sliderMainWidth,
      perSlide,
      infinite
    })
	});

	// when slidesLength <= perSlide dragEvent is disable
	if(slidesLength <= perSlide){
		return false;
	}

	if(!infinite && !rtl){
		// stop drag when firstItem go to lastItem on drag
		const firstTolastDrag = getTranslate3d(sliderItems) - posX2New() > (sliderItemWidthNew() * perSlide) + thresholdNew();
		// stop drag when lastItem go to fistItem on drag
		const lastToFirstDrag = getTranslate3d(sliderItems) - posX2New() <= calcFinalItemPositionNew - thresholdNew();
		if(firstTolastDrag || lastToFirstDrag){
			return false;
		}
	}

	if(infinite && !rtl){
		// stop drag when firstItem go to lastItem on drag
		const firstTolastDrag = getTranslate3d(sliderItems) - posX2New() > 0;
		// stop drag when lastItem go to fistItem on drag
		const lastToFirstDrag = getTranslate3d(sliderItems) - posX2New() + 5 < sliderItemWidthNew() * (slidesLength + perSlide + 1);

		if(firstTolastDrag || lastToFirstDrag){
			return false;
		}
	};
	
	if(!infinite && rtl){
		// stop drag when firstItem go to lastItem on drag
		const firstTolastDrag = getTranslate3d(sliderItems) - posX2New() < (sliderItemWidthNew() * perSlide) + thresholdNew();
		// stop drag when lastItem go to fistItem on drag
		const lastToFirstDrag = getTranslate3d(sliderItems) - posX2New() >= calcFinalItemPositionNew - thresholdNew();
		
		if(firstTolastDrag || lastToFirstDrag){
			return false;
		}
	};
	if(infinite && rtl){
		// stop drag when firstItem go to lastItem on drag
		const firstTolastDrag = getTranslate3d(sliderItems) - posX2New() < 0;
		// stop drag when lastItem go to fistItem on drag
		const lastToFirstDrag = getTranslate3d(sliderItems) - posX2New() - 5 > sliderItemWidthNew() * (slidesLength + perSlide + 1);
		if(firstTolastDrag || lastToFirstDrag){
			return false;
		}
	};

	const result = () => getTranslate3d(sliderItems) - posX2New();
	sliderItems.style["transform"] = setTranslate3d(result());
};


export const mouseEventNull = () => {
  document.onmouseup = null;
  document.onmousemove = null;
};

export const dragStart = (params) => {
	let {
		e,
		sliderItems,
		dragEndCall,
		dragActionCall,
		setPosInitial,
		setPosX1,
		sliderMainWidth,
		rtl
	} = params;

	e = e || window.event;
	e.preventDefault();
	const posInitial = getTranslate3d(sliderItems);
	if (e.type == "touchstart") {
		setPosInitial(posInitial);
		setPosX1(caroueslTouchStart({
			e,
			rtl,
			sliderMainWidth
		}));
	} else {
		const dragActionParams = {
			e,
			rtl,
			dragEndCall,
			dragActionCall,
			sliderMainWidth,
		};
		setPosInitial(posInitial);
		setPosX1(caroueslDragAction(dragActionParams));
	}
};

export const dragAction = (params) => {
	let {
		e,
		getPosX1,
		setPosX1,
		setPosX2,
		rtl,
		getSliderItems,
		threshold,
		getPosX2,
		getSlidesLength,
		getPerSlide,
		responsive,
		getSlider,
		infinite,
		getSlideSize,
		getSliderMainWidth
	} = params;
	const sliderMainWidth = getSliderMainWidth();
	e = e || window.event;
	const clientXParams = {e,rtl,sliderMainWidth};
	if (e.type == "touchmove") {
		const dragActionTouchmovePosX2Params = {
			posX1: getPosX1(),
			...clientXParams
		};
		setPosX2(dragActionTouchmovePosX2(dragActionTouchmovePosX2Params));
		setPosX1(dragActionTouchmovePosX1(clientXParams));
	} else {
		const dragActionMousemoveParams = {
			posX1: getPosX1(),
			...clientXParams
		};
		setPosX2(dragActionMousemove(dragActionMousemoveParams));
		setPosX1(dragActionMousemovePosX1(clientXParams));
	}

	const dragActionCalcPositionParams = {
		sliderItems: getSliderItems(),
		posX2: getPosX2(),
		slidesLength: getSlidesLength(),
		perSlide: getPerSlide(),
		sliderItemWidth: calcSliderChildWidth({
			responsiveItemCount: responsiveItemCount(responsive),
			slider: getSlider()
		}),
		slideSize: getSlideSize(),
		sliderMainWidth,
		infinite,
		threshold,
		rtl
	};
	dragActionCalcPosition(dragActionCalcPositionParams);
};

export const dragEnd = (params) => {
	let {
		sliderItems,
		threshold,
		slidesLength,
		responsive,
		infinite,
		slideSize,
		sliderMainWidth,
		setIndex,
		transitionendWatcherCall,
		slider,
		setPosFinal,
		getPosFinal,
		drag,
		nav,
		rtl
	} = params;
	
	const perSlide = truncResponsiveItemCount(responsive);
	
	// when drag false or slidesLength <= perSlide dragEvent is disable
	if(!drag || slidesLength <= perSlide){
		mouseEventNull();
		return false;
	}


	const thresholdNew = () => {
		if(rtl) return -threshold;
		return threshold;
	};

	const calcFinalItemPositionNew = directionSetter({
		rtl,
		input: calcFinalItemPosition({
      slideSize,
      slidesLength,
      sliderMainWidth,
      perSlide,
      infinite
    })
	});
	setPosFinal(getTranslate3d(sliderItems));

	const calcIndex = calcCurrentIndex({
		sliderItems,
		infinite,
		perSlide,
		slideSize,
		sliderMainWidth
	});
	setIndex(calcIndex);


	if (!infinite && calcIndex > slidesLength && calcIndex < slidesLength + perSlide ||
		infinite && calcIndex + perSlide === perSlide
	) {
		sliderItems.style["transform"] = setTranslate3d(calcFinalItemPositionNew);
	}

	if (!infinite && nav) {
		prevBlock(slider);
		nextBlock(slider);
	}

	if (!infinite && calcIndex === slidesLength + perSlide) {
		sliderItems.style["transform"] = setTranslate3d(
			getPosFinal() - sliderItems.children[0].clientWidth
		);
	}

	if (
		!infinite &&
		(getTranslate3d(sliderItems) <= thresholdNew() &&
		getTranslate3d(sliderItems) >= 0) ||
		(rtl && getTranslate3d(sliderItems) <= 0)
	) {
		sliderItems.style["transform"] = setTranslate3d(0);
		if(nav){
			prevNone(slider);
			nextBlock(slider);
		}
	}

	if (!infinite && !rtl && getTranslate3d(sliderItems) <= calcFinalItemPositionNew) {
		sliderItems.style["transform"] = setTranslate3d(calcFinalItemPositionNew);
		if(nav){
			nextNone(slider);
			prevBlock(slider);
		}
	}

	if (!infinite && rtl && getTranslate3d(sliderItems) >= calcFinalItemPositionNew) {
		sliderItems.style["transform"] = setTranslate3d(calcFinalItemPositionNew);
		if(nav){
			nextNone(slider);
			prevBlock(slider);
		}
	}

	mouseEventNull();
	transitionendWatcherCall();
};