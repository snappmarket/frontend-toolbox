import Styled from 'styled-components';

export const StyledCarouselDemo = Styled.div`
  .slider {
    width: 100%;
    height: 300px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }
  .wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 300px;
    z-index: 1;
  }
  .slider.loaded .slide:nth-child(1) {
    background: #7ADCEF;
  }
  .slider.loaded .slide:nth-child(2){
    background: #FFCF47;
  }
  .slider.loaded .slide:nth-child(3) {
    background: #3CFF96;
  }
  .slider.loaded .slide:nth-child(4) {
    background: #a78df5;
  }
  .slider.loaded .slide:nth-child(5) {
    background: #ff8686;
  }
  .slider.loaded .slide:nth-child(6) {
    background: #7ADCEF;
  }
  .slider.loaded .slide:nth-child(7) {
    background: #FFCF47;
  }
  .slider.loaded .slide:nth-child(8) {
    background: #3CFF96;
  }
  .slider.loaded .slide:nth-child(9) {
    background: #a78df5;
  }
  .slide {
    height: 300px;
    background: #FFCF47;
    border-radius: 2px;
    padding: 15px;
    align-items: center;
    justify-content: center;
  }
  .dots li.active{
    background: #666;
  }
`;
