<p align="center">
    <img src="./logo.png" alt="react hooks" />
</p>

<h1>Re-usable react hooks</h1>
<h3>This hooks are implemented in our project, feel free to use and contribute on them</h3>

> 🧵 do not worry about render phase effect calls
----

[![version](https://img.shields.io/npm/v/@snappmarket/use-did-update-effect.svg?style=flat-square)](https://www.npmjs.com/package/@snappmarket/use-did-update-effect)
[![downloads](https://img.shields.io/npm/dm/@snappmarket/use-did-update-effect.svg?style=flat-square)](http://www.npmtrends.com/@snappmarket/use-did-update-effect)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/npm/l/@snappmarket/use-did-update-effect.svg?style=flat-square)](https://github.com/snappmarket/react-hooks/tree/master/packages/useDidUpdateEffect/blob/master/LICENSE.md)

[![Watch on GitHub](https://img.shields.io/github/watchers/snappmarket/react-hooks.svg?style=social)](https://github.com/snappmarket/react-hooks/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/snappmarket/react-hooks.svg?style=social)](https://github.com/snappmarket/react-hooks/stargazers)

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
