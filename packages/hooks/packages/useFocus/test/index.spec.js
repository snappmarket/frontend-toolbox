import { renderHook } from '@testing-library/react-hooks';
import useFocus from '../index';

describe('useFocus tests:', () => {
  it('should use useFocus', () => {
    const { result } = renderHook(() => useFocus(false));

    expect(result.current).toBeDefined();
  });
});
