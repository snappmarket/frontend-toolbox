# useRouteChange
> 🏹 detect when react router dom route changes
----

[![version](https://img.shields.io/npm/v/@snappmarket/use-did-update-effect.svg?style=flat-square)](https://www.npmjs.com/package/@snappmarket/use-did-update-effect)
[![downloads](https://img.shields.io/npm/dm/@snappmarket/use-did-update-effect.svg?style=flat-square)](http://www.npmtrends.com/@snappmarket/use-did-update-effect)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/npm/l/@snappmarket/use-did-update-effect.svg?style=flat-square)](https://github.com/snappmarket/react-hooks/tree/master/packages/useDidUpdateEffect/blob/master/LICENSE.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/snappmarket/react-hooks.svg?style=social)](https://github.com/snappmarket/react-hooks/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/snappmarket/react-hooks.svg?style=social)](https://github.com/snappmarket/react-hooks/stargazers)


## get started 
We provide two way of using this package `single` or `multi` :
```bash
npm i @snappmarket/use-route-change
OR
npm i @snappmarket/hooks
```

## usage 
```javascript
import useRouteChange from '@snappmarket/use-route-change';
// or 
// import { useRouteChange } from '@snappmarket/hooks';


const MyComponenet = props => {
  useRouteChange(() => {
    // do sth here
  });
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
