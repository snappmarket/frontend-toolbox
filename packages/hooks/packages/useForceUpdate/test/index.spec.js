import { renderHook } from '@testing-library/react-hooks';
import useForceUpdate from '../index';

describe('useForceUpdate tests:', () => {
  it('should use useForceUpdate', () => {
    const { result } = renderHook(() => useForceUpdate());

    expect(result.current).toBeDefined();
  });
});
