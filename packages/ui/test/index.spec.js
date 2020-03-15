// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ThemeProvider } from 'styled-components';
// import * as UiComponents from '../packages/index';
//
// import { makeTheme } from '../packages/Theme/src';
//
// // RENDER TEST
// describe('UI components render test : ', () => {
//   const EXCLUDED_PACKAGES = [
//     'makeTheme',
//     'Carousel',
//     'Tab',
//     'TabPanel',
//     'TabSwitcher',
//     'JsonLD',
//     'Image',
//     'Grid',
//     'InputRange',
//     'Pagination',
//     'TextWrap',
//     'Accordion',
//     'AccordionContent',
//     'AccordionHead',
//     'Tooltip',
//   ];
//   const Wrapper = ({ children }) => (
//     <ThemeProvider theme={makeTheme()}>{children}</ThemeProvider>
//   );
//
//   /**
//    * Run test on all ui components
//    */
//   Object.keys(UiComponents).forEach((uiComponent) => {
//     if (!EXCLUDED_PACKAGES.includes(uiComponent)) {
//       console.log('E: ', uiComponent);
//
//       it(`should render ${uiComponent} without crashing`, () => {
//         const div = document.createElement('div');
//         const UiComponent = UiComponents[uiComponent];
//
//         ReactDOM.render(
//           <Wrapper>
//             <UiComponent />
//           </Wrapper>,
//           div,
//         );
//         ReactDOM.unmountComponentAtNode(div);
//       });
//     }
//   });
// });
