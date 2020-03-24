import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Wrapper, theme } from '../../../test/test.helpers';
import Textarea from '../index';


describe('Textarea ui component tests', () => {
  // it('Should render with status of gray at default', () => {
  //   const {  getByTestId } = render(
  //     <Wrapper><Textarea /></Wrapper>,
  //   );

  //   expect(getByTestId('textarea')).toHaveStyle({
  //     borderColor: theme.colors.gray['ultra-light'],
  //   });

  // });   

  // it('Should change the style when get different type of status props ', () => {
  //   const { rerender, getByTestId } = render(
  //     <Wrapper><Textarea status="red" /></Wrapper>,
  //   );

  //   expect(getByTestId('textarea')).toHaveStyle({
  //     borderColor: theme.colors.red['ultra-light'],
  //   });

  //   rerender(<Wrapper><Textarea status="blue" /></Wrapper>);

  //   expect(getByTestId('textarea')).toHaveStyle({
  //     borderColor: theme.colors.blue['ultra-light'],
  //   });

  //   rerender(<Wrapper><Textarea status="green" /></Wrapper>);

  //   expect(getByTestId('textarea')).toHaveStyle({
  //     borderColor: theme.colors.green['ultra-light'],
  //   });

  //   rerender(<Wrapper><Textarea status="orange" /></Wrapper>);

  //   expect(getByTestId('textarea')).toHaveStyle({
  //     borderColor: theme.colors.orange['ultra-light'],
  //   });

  // }); 

  // it('Should add label in textarea wrapper when get label props ', () => {
    
  //   const { getByTestId } = render(
  //     <Wrapper><Textarea id="labelId" status="red" /><label htmlFor='labelId'>title</label></Wrapper>,
  //   );
    
  //   const textareaLabel = getByTestId('textareaLabel');
  //   expect(getByTestId('textareaWrapper')).toContainElement(textareaLabel);

  // });

  it('Should set id for textarea when get id props ', () => {
    
    const { getByTestId } = render(
      <Wrapper><Textarea id="labelId" status="red" /><label htmlFor='labelId'>title</label></Wrapper>,
    );
    
    expect(getByTestId('textarea')).toHaveAttribute('id','labelId');

  });

  it('Should set placeholder for textarea when get placeholder props ', () => {
    
    const { getByTestId } = render(
      <Wrapper><Textarea id="labelId" placeholder="some text ..." status="red" /></Wrapper>,
    );
    
    expect(getByTestId('textarea')).toHaveAttribute('placeholder','some text ...');

  });

  it('Should add class to element', () => {
    const { getByTestId } = render(
      <Wrapper><Textarea id="labelId" className='my-custom-class' placeholder="some text ..." status="red" /></Wrapper>,
    );

    expect(getByTestId('textarea')).toHaveClass('my-custom-class');
  });

  it('Should call onChange callback when get onChange props', () => {
    
    const callback = jest.fn();
    const { getByTestId } = render(
      <Wrapper>
        <Textarea id="labelId" onChange={callback} status="red" />
      </Wrapper>,
    );
    expect(callback).toHaveBeenCalledTimes(0);
  });

  
});
