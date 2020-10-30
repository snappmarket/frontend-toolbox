
import { renderHook } from '@testing-library/react-hooks';
import useWindowScroll from '../index';

describe('useWindowScroll tests:', () => {
  it('should use useWindowScroll', () => {
    const { result } = renderHook(() => useWindowScroll({}));

    expect(result.current).toBeDefined();
    expect(typeof result.current.start).toBe('function');
    expect(typeof result.current.reset).toBe('function');
    expect(typeof result.current.pause).toBe('function');
    expect(typeof result.current.time).toBe('number');
  });
});
