import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper } from '../../../test/test.helpers';
import { StyledCarouselDemo } from '../src/core/styles.demo';
import { StyledSimpleCarousel } from '../src/core/styles';
describe('CarouselDemo ui component tests', () => {
    it('Should get all style', () => {
        const { getByTestId } = render(
            <Wrapper>
                <StyledCarouselDemo>
                    <div id="slider" className="slider loaded" data-testid="carousel">
                        <div className="wrapper" data-testid="carousel-wrapper">
                            <div className="slides" data-testid="carousel-slides">
                                <span className="slide active" data-testid="carousel-slide" data-page="1">Slide 1</span>
                                <span className="slide active" data-page="1">Slide 2</span>
                                <span className="slide" data-page="2">Slide 3</span>
                                <span className="slide" data-page="2">Slide 4</span>
                                <span className="slide" data-page="3">Slide 5</span>
                            </div>
                        </div>
                        <span className="control next" data-testid="carousel-next"></span>
                        <span className="control prev" data-testid="carousel-next"></span>
                        <ul className="dots" data-testid="carousel-dots">
                            <li className="dots-item active" data-testid="carousel-dot-item" data-dot-index="1">1</li>
                            <li className="dots-item" data-dot-index="2">2</li>
                            <li className="dots-item" data-dot-index="3">3</li>
                        </ul>
                    </div>
                </StyledCarouselDemo>
            </Wrapper>,
        );

        expect(getByTestId('carousel')).toHaveStyle({
            width: '100%',
            height: '300px',
            boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
        });
        expect(getByTestId('carousel-wrapper')).toHaveStyle({
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            height: '300px',
            zIndex: 1,
        });
        expect(getByTestId('carousel-slide')).toHaveStyle({
            height: '300px',
            background: '#FFCF47',
            borderRadius: '2px',
            padding: '15px',
            alignItems: 'center',
            justifyContent: 'center',
        });
        expect(getByTestId('carousel-dot-item')).toHaveStyle({
            background: '#666',
        });

    });
});
describe('CarouselDemoMain ui component tests', () => {
    it('Should get all style', () => {
        const { getByTestId } = render(
            <Wrapper>
                <StyledSimpleCarousel>
                    <div id="slider" className="slider loaded" data-testid="carousel">
                        <div className="wrapper" data-testid="carousel-wrapper">
                            <div className="slides" data-testid="carousel-slides">
                                <span className="slide active" data-testid="carousel-slide" data-page="1">Slide 1</span>
                                <span className="slide active" data-page="1">Slide 2</span>
                                <span className="slide" data-page="2">Slide 3</span>
                                <span className="slide" data-page="2">Slide 4</span>
                                <span className="slide" data-page="3">Slide 5</span>
                            </div>
                        </div>
                        <span className="control next" data-testid="carousel-next"></span>
                        <span className="control prev" data-testid="carousel-next"></span>
                        <ul className="dots" data-testid="carousel-dots">
                            <li className="dots-item active" data-testid="carousel-dot-item" data-dot-index="1">1</li>
                            <li className="dots-item" data-dot-index="2">2</li>
                            <li className="dots-item" data-dot-index="3">3</li>
                        </ul>
                    </div>
                </StyledSimpleCarousel>
            </Wrapper>,
        );

        expect(getByTestId('carousel')).toHaveStyle({
            position: 'relative',
        });
        expect(getByTestId('carousel-wrapper')).toHaveStyle({
            overflow: 'hidden',
        });
        expect(getByTestId('carousel-slide')).toHaveStyle({
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
        });
        expect(getByTestId('carousel-dot-item')).toHaveStyle({
            backgroundColor: '#efefef',
            fontSize: 0,
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            display: 'inline-block',
            margin: '0 5px',
        });
    });
});