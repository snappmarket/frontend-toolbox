# useDidUpdateEffect custom hook

> 🧵 do not worry about render phase effect calls

Easily prevent `useEffect` calling on render phase, instead of that use `useDidUpdateEffect` with same API 
then it will handle it for you :)

----

[![version](https://img.shields.io/npm/v/@snappmarket/use-did-update-effect.svg?style=flat-square)](https://www.npmjs.com/package/@testing-library/react-hooks)
[![downloads](https://img.shields.io/npm/@snappmarket/use-did-update-effect.svg?style=flat-square)](http://www.npmtrends.com/@testing-library/react-hooks)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/npm/l/@snappmarket/use-did-update-effect.svg?style=flat-square)](https://github.com/snappmarket/react-hooks/tree/master/packages/useDidUpdateEffect/blob/master/LICENSE.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/testing-library/react-hooks-testing-library.svg?style=social)](https://github.com/snappmarket/react-hooks/tree/master/packages/useDidUpdateEffect/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/testing-library/react-hooks-testing-library.svg?style=social)](https://github.com/snappmarket/react-hooks/tree/master/packages/useDidUpdateEffect/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/snappmarket/react-hooks/tree/master/packages/useDidUpdateEffect.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20react-hooks-testing-library%20by%20%40testing-library%20https%3A%2F%2Fgithub.com%2Ftesting-library%2Freact-hooks-testing-library%20%F0%9F%91%8D)

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
