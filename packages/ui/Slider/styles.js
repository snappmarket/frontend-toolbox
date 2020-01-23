import Styled from 'styled-components';

const StyledSliderWrapper = Styled.div`
    > .slick-slider {
        div {
            margin: 0;
        }
    }
`;

const StyledProductItemSlider = Styled.div`
    width: calc(${props => props.theme.defaultRem} * 10);
    height: calc(${props => props.theme.defaultRem} * 10);
    text-align: center;
    min-height: calc(${props => props.theme.defaultRem} * 32);
    > img {
        height: 100%;
        max-width: 100%;
        margin: 0 auto;
    }
`;

export { StyledSliderWrapper, StyledProductItemSlider };
