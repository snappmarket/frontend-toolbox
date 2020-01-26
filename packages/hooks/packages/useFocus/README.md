# useFocus
> 😵 focus on every thing you want
----

[![version](https://img.shields.io/npm/v/@snappmarket/use-focus.svg?style=flat-square)](https://www.npmjs.com/package/@snappmarket/use-focus)
[![downloads](https://img.shields.io/npm/dm/@snappmarket/use-focus.svg?style=flat-square)](http://www.npmtrends.com/@snappmarket/use-focus)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/npm/l/@snappmarket/use-focus.svg?style=flat-square)](https://github.com/snappmarket/react-hooks/tree/master/packages/useDidUpdateEffect/blob/master/LICENSE.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/snappmarket/react-hooks.svg?style=social)](https://github.com/snappmarket/react-hooks/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/snappmarket/react-hooks.svg?style=social)](https://github.com/snappmarket/react-hooks/stargazers)

## get started 
We provide two way of using this package `single` or `multi` :
```bash
npm i @snappmarket/use-focus
OR
npm i @snappmarket/hooks
```

## usage 
```javascript
import useFocus from '@snappmarket/use-focus';
// or 
// import { useFocus } from '@snappmarket/hooks';


const MyComponenet = props => {
  const focusRef = useFocus(null);

  return (<input type="text" ref={focusRef}/>)
};
```

### source code
```javascript
import { useEffect, useRef } from 'react';

/**
 * Focus on a ref after render
 * @param initialRef
 * @returns {React.MutableRefObject<*>}
 */
export default initialRef => {
  const ref = useRef(initialRef);
  useEffect(() => {
    setTimeout(() => {
      ref.current.focus();
    }, 100);
  }, []);

  return ref;
};
```
