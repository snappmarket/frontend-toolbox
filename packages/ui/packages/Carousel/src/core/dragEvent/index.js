import {
	dragAction,
	dragEnd,
	dragStart,
} from './partial';

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
			config: {
				responsive,
				threshold,
				rtl,
				nav,
			},
			getDrag,
			getInfinite,
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
			transitionendWatcherCall
		} = this.core;
		
		const infinite = getInfinite();
		const sliderItems = getSliderItems();
		const drag = getDrag();

		const dragEndCall = () => {
			let dragStartParams = {
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
				nav,
				setIndex,
				setPosFinal,
				transitionendWatcherCall,
				dragAction,
				drag,
				setPosInitial,
				setPosX1,
				setAllowShift,
				index: getIndex(),
			};
			dragEnd(dragStartParams);
		};
		
		const dragActionCall = (e) => {
			let dragActionParams = {
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
				getSliderMainWidth
			};
			dragAction(dragActionParams);
		};

		const dragStartCall = (e) => {
			let dragStartParams = {
				e,
				sliderItems,
				setPosInitial,
				setPosX1,
				dragEndCall: dragEndCall,
				dragActionCall: (e) => dragActionCall(e),
				sliderMainWidth: getSliderMainWidth(),
				rtl
			};
			dragStart(dragStartParams);
		};

		// Mouse events
		sliderItems.addEventListener("mousedown", dragStartCall);
		// Touch events
		sliderItems.addEventListener("touchstart", dragStartCall);
		sliderItems.addEventListener("touchend", dragEndCall);
		sliderItems.addEventListener("touchmove", dragActionCall);

	}
}