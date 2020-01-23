# useDidUpdateEffect custom hook

> 🧵 do not worry about render phase effect calls

Easily prevent `useEffect` calling on render phase, instead of that use `useDidUpdateEffect` with same API 
then it will handle it for you :)


### source code
```javascript
import { useRef, useEffect } from 'react';

/**
 * Calls function on component update or inputs change phase
 * @param fn
 * @param inputs
 */
export default (fn, inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
};

```
