# useDebounce
> 🔂 change rapidly, do once
----

[![version](https://img.shields.io/npm/v/@snappmarket/use-debounce.svg?style=flat-square)](https://www.npmjs.com/package/@snappmarket/use-debounce)
[![downloads](https://img.shields.io/npm/dm/@snappmarket/use-debounce.svg?style=flat-square)](http://www.npmtrends.com/@snappmarket/use-debounce)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/npm/l/@snappmarket/use-debounce.svg?style=flat-square)](https://github.com/snappmarket/frontend-toolbox/tree/master/packages/useDidUpdateEffect/blob/master/LICENSE.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/snappmarket/frontend-toolbox.svg?style=social)](https://github.com/snappmarket/frontend-toolbox/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/snappmarket/frontend-toolbox.svg?style=social)](https://github.com/snappmarket/frontend-toolbox/stargazers)

## get started 
We provide two way of using this package `single` or `multi` :
```bash
npm i @snappmarket/use-debounce
OR
npm i @snappmarket/hooks
```

## usage 
```javascript
import useDebounce from '@snappmarket/use-debounce';
// or 
// import { useDebounce } from '@snappmarket/hooks';


const MyComponenet = props => {
    const [value, setValue] = useState('');
    const [debouncedValue] = useDebounce(value, 200);


  /**
   * Call api based on debounced value
   */
  useEffect(() => {
    // do something with debounce
  }, [debouncedValue]);
};
```


### source code
```javascript
import { useState, useEffect } from 'react';

/**
 * Debounce setting a value
 * @param value
 * @param delay
 * @returns {[string, fn, fn]}
 */
export default function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  let handler;
  const canceller = () => {
    clearTimeout(handler);
  };

  useEffect(() => {
    handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return canceller;
  }, [value]);

  return [debouncedValue, canceller, setDebouncedValue];
}

```
