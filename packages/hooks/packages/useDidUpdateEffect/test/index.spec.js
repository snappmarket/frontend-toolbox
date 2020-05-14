import { renderHook } from '@testing-library/react-hooks';
import useDidUpdateEffect from '../index';

describe('UseDidUpdateEffect tests:', () => {
  it('should use DidUpdateEffect', () => {
    const { result } = renderHook(() => useDidUpdateEffect(f => f));

    expect(result.current).toBe(true);
  });
});
