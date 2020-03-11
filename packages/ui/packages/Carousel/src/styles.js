import Styled from 'styled-components';

export const StyledSimpleCarousel = Styled.div`
  .slides {
    display: flex;
    position: relative;
    width: 5000000px;
  }
  .slides.shifting {
    transition: all 0.2s ease-out;
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
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50px;
    margin-top: -20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    z-index: 2;
    align-items: center;
    justify-content: center;
    display:flex;
    direction: ltr;
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
    left: -20px;
  }
  .next {
    background-size: 22px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    right: -20px;
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
    left:-20px;
  }
  .slider-rtl .prev{
    left:auto;
    right:-20px;
  }
`;
