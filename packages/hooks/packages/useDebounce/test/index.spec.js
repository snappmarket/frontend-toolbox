import { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useDebounce from '../index';

describe('Use-debounce tests:', () => {
  it('should use debounce', () => {
    const { result } = renderHook(() => useDebounce(20, 1000));

    expect(result.current[0]).toBe(20);
    expect(typeof result.current[1]).toBe('function');
    expect(typeof result.current[2]).toBe('function');
  });

  // test :
  // - should call canceller on unmount
  // - should stop when calling canceller
  // - should wait and do debounce
  // - should allow us to force set value
  it('should increment counter', () => {
    const { result: setStateResult } = renderHook(() => useState(20));
    const { result } = renderHook(() =>
      useDebounce(setStateResult.current[0], 1000),
    );

    // change state value
    act(() => {
      setStateResult.current[1](40);
    });
    expect(result.current[0]).toBe(20);

    setTimeout(() => {
      expect(result.current[0]).toBe(40);
    }, 1001);
  });
});
