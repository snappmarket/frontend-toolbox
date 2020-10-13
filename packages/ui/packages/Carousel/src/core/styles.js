import Styled from 'styled-components';

export const StyledSimpleCarousel = Styled.div`
  .slides {
    display: flex;
    position: relative;
    width: 5000000px;
  }
  .slides.shifting, .slides.soft-transition {
    transition: all 0.2s ease-out;
  }
  .avoid-clicks {
    pointer-events: none;
  }
  .slider{
    position: relative;
  }
  .slider .wrapper{
    overflow: hidden;
  }
  .slide {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .slide > * {
    flex: 1;
  }
  .control {
    position: absolute;
    top: 50%;
    width: 35px;
    height: 35px;
    box-shadow: 0 0 10px 0 rgba(41, 0, 255, 0.16);
    background-color: #2446f5;
    border-radius: 50px;
    margin-top: -20px;
    z-index: 2;
    align-items: center;
    justify-content: center;
    direction: ltr;
    display: none;
  }
  .loaded .control {
    display: flex;
  }
  .control svg {
    fill: #fff;
  }
  .control:after{
    display: block;
    font-size: 36px;
  }
  .prev {
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    left: 10px;
  }
  .next {
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    right: 10px;
  }
  .prev:active,
  .next:active {
    transform: scale(0.8);
  }
  .dots {
    padding: 0;
    text-align:center;
  }
  .dots li {
    font-size: 0;
    width: 15px;
    height: 15px;
    background-color: #ababab;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
  }
  .dots li.active {
    background-color: #efefef;
  }
  .slider-rtl{
    direction: rtl;
  }
  .slider-rtl .control{
    transform: rotateY(180deg);
  }
  .slider-rtl .control:after{
    position: relative;
    top:-2px;
  }
  .slider-rtl .next{
    right:auto;
    left:10px;
  }
  .slider-rtl .prev{
    left:auto;
    right:10px;
  }
  .flex-scroll-on{
    .wrapper{
      overflow-x: auto !important;
      touch-action: pan-y pan-x manipulation;
      &::-webkit-scrollbar {
        width: 0;
        background: transparent; / make scrollbar transparent /
      }
    }
    .slides{
      width: auto !important;
      transform: translate3d(0px, 0px, 0px) !important;
      > * {
        flex: 0 0 auto;
      }
    }
    .control, .dots{
      display: none !important;
    }
  }
`;
