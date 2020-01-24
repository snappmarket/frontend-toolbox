# useDidUpdateEffect
> 🧵 do not worry about render phase effect calls
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
npm i @snappmarket/use-did-update-effect
OR
npm i @snappmarket/hooks
```

## usage 
```javascript
import useDidUpdateEffect from '@snappmarket/use-did-update-effect';
// or 
// import { useDidUpdateEffect } from '@snappmarket/hooks';


const MyComponenet = props => {
  /**
   * Do not run on render
   */
  useDidUpdateEffect(() => {
    // I will run only when my dependencies update
  }, [deps]);
};
```


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
