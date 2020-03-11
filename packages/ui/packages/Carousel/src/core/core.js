import {
	calcSliderChildWidth,
	responsiveItemCount,
	truncResponsiveItemCount,
	switchInfiniteResponsiveCount,
	transitionendWatcher,
	elementCreator,
	childFider,
	prevNone,
	nextNone,
	addClassToElement,
	vdomArrayConvertor,
	removeAllChildren,
	infiniteChecker,
	dragChecker
} from "./utils";

import { shiftSlideIsDir } from './sliderArrows/partial';

import SliderDots from './sliderDots/index';
import SliderTrailer from './slideTrailer/index';
import SliderArrows from './sliderArrows/index';
import DragEvent from "./dragEvent/index";

class SliderCore {


	constructor(config) {
		this.setConfig(config);
		this.initialize();
	};

	setConfig = config => { this.config = config };
	getConfig = () => this.config;

	setSlider = slider => { this.slider = slider };
	getSlider = () => this.slider;

	setPosX1 = posX1 => { this.posX1 = posX1 };
	getPosX1 = () => this.posX1;

	setInfinite = infinite => { this.infinite = infinite };
	getInfinite = () => this.infinite;

	setDrag = drag => { this.drag = drag };
	getDrag = () => this.drag;

	setPosX2 = posX2 => { this.posX2 = posX2 };
	getPosX2 = () => this.posX2;

	setPerSlide = perSlide => { this.perSlide = perSlide };
	getPerSlide = () => this.perSlide;


	setSliderItems = sliderItems => { this.sliderItems = sliderItems };
	getSliderItems = () => this.sliderItems;

	setPosInitial = posInitial => { this.posInitial = posInitial };
	getPosInitial = () => this.posInitial;

	setPosFinal = posFinal => { this.posFinal = posFinal };
	getPosFinal = () => this.posFinal;

	setSlidesLength = slidesLength => { this.slidesLength = slidesLength };
	getSlidesLength = () => this.slidesLength;

	setSliderMainWidth = sliderMainWidth => { this.sliderMainWidth = sliderMainWidth };
	getSliderMainWidth = () => this.sliderMainWidth;


	setOrginSlider = orginSlider => { this.orginSlider = orginSlider };
	getOrginSlider = () => this.orginSlider;

	setSlideSize = slideSize => { this.slideSize = slideSize };
	getSlideSize = () => this.slideSize;

	setSliderItemWidth = sliderItemWidth => { this.sliderItemWidth = sliderItemWidth };
	getSliderItemWidth = () => this.sliderItemWidth;

	setIndex = index => { this.index = index };
	getIndex = () => this.index;

	setAllowShift = allowShift => { this.allowShift = allowShift };
	getAllowShift = () => this.allowShift;

	updateLog = () => {
		console.log(this.index)
	}

	initialize = () => {
		const {
			slider,
			infinite,
			responsive,
			nav,
			dots,
			autoPlay,
			rtl,
			drag
		} = this.getConfig();

		// reset Slider
		const mainSlider = slider,
		mainSliderClone = mainSlider.cloneNode(true);
		this.setSlider(mainSliderClone)
		removeAllChildren({
			wrapper: slider,
			className: 'clone'
		});
	
		//----------- start init variables  -----
		this.setSlider(slider);
		
		const sliderClienWidth = this.getSlider().clientWidth;
		this.setSliderMainWidth(sliderClienWidth);
		
		let sliderSlidesSelector = childFider({
			wrapper: slider,
			className: '.slides'
		});
		this.setSliderItems(sliderSlidesSelector);
		
		const sliderChildWidth = calcSliderChildWidth({
			responsiveItemCount: responsiveItemCount(responsive),
			slider: this.getSlider()
		});
		this.setSlideSize(sliderChildWidth);

		const sliderItemWidth = calcSliderChildWidth({
			responsiveItemCount: responsiveItemCount(responsive),
			slider: this.getSlider()
		});
		this.setSliderItemWidth(sliderItemWidth);

		// init slider for start
		const slides = vdomArrayConvertor(sliderSlidesSelector.children);
		const sliderLength = slides.length;
		this.setSlidesLength(sliderLength);
		
		const perSlide = switchInfiniteResponsiveCount(
			truncResponsiveItemCount(responsive),
			infinite
			);
			
		this.setPerSlide(perSlide);
			
		const infCheck = infiniteChecker({
			infinite,
			perSlide,
			sliderLength
		});
		this.setInfinite(infCheck);

		const dragCheck = dragChecker({
			drag,
			perSlide,
			sliderLength
		});

		this.setDrag(dragCheck);
				
		// set init index
		if(infCheck){
			this.setIndex(perSlide + 1)
		}else{
			this.setIndex(0);
		}

		if(rtl){
			const classItemParams = {
				item:slider,
				className:'slider-rtl',
			};
			addClassToElement(classItemParams);
		}

		if (nav) {
			elementCreator({ tag: 'Span', wrapper: slider, className: 'control next' });
			elementCreator({ tag: 'Span', wrapper: slider, className: 'control prev' });
			this.sliderArrows = new SliderArrows({ core: this });
			const index = this.getIndex();
			if(perSlide === sliderLength){
				prevNone(slider);
				nextNone(slider);
			}
			if (!infCheck) {
				if( index === 0){
					prevNone(slider);
				}
			}
		}

		if (dots) {
			elementCreator({ tag: 'Ul', wrapper: slider, className: 'dots' });
			this.sliderDots = new SliderDots({ core: this });
		}

		if (autoPlay) {
			setInterval(() => this.next(), 3000);
		}

		this.sliderTrailer = new SliderTrailer({ core: this });
		
		// action drag event
		this.dragEvent = new DragEvent({ core: this });
		
		sliderSlidesSelector.addEventListener("transitionend", this.transitionendWatcherCall);
		this.windowResizeWatcher();
	}

	next() {
		const {
			sliderItems,
			index,
			perSlide,
			slideSize,
			slidesLength,
			sliderMainWidth,
			getInfinite,
			config: {
				slider,
				responsive,
				rtl
			}
		} = this;
		const classItemParams = {
			item: childFider({
				wrapper: slider,
				className: ".slides"
			}),
			className: 'shifting',
		};
		addClassToElement(classItemParams);

		this.setIndex(shiftSlideIsDir({
			sliderItems,
			index,
			perSlide,
			slideSize,
			slidesLength,
			sliderMainWidth,
			responsiveItem: responsiveItemCount(responsive),
			infinite:getInfinite(),
			slider,
			rtl
		}))
	};

	transitionendWatcherCall = () => {
		const {
			config: {
				slider,
				responsive,
				dots,
				nav,
				rtl
			},
			getInfinite,
			index,
			getIndex,
			setIndex,
			dragAction,
			setPosInitial,
			setPosX1,
			setAllowShift,
			sliderItems,
			slideSize,
			sliderMainWidth,
			slidesLength,
			sliderItemWidth
		} = this;
		transitionendWatcher({
			slider,
			infinite:getInfinite(),
			responsive,
			dots,
			nav,
			rtl,
			sliderItems,
			dragAction,
			setPosInitial,
			setPosX1,
			setAllowShift,
			index,
			slideSize,
			sliderMainWidth,
			slidesLength,
			sliderItemWidth,
			setIndex,
			getIndex
		});
	};

	windowResizeWatcher = () => {
		let resizeTimer;
		window.onresize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => {
				this.initialize();
			}, 250);
		};
	};

};

export default SliderCore;