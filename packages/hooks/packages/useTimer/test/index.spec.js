import { renderHook } from '@testing-library/react-hooks';
import useTimer from '../index';

describe('useTimer tests:', () => {
  it('should use useTimer', () => {
    const { result } = renderHook(() => useTimer({}));

    expect(result.current).toBeDefined();
    expect(typeof result.current.start).toBe('function');
    expect(typeof result.current.reset).toBe('function');
    expect(typeof result.current.pause).toBe('function');
    expect(typeof result.current.time).toBe('number');
  });
});
