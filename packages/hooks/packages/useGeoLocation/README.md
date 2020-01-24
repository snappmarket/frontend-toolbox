# useGeoLocation
> 🗺 easily deal with navigator location API
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
npm i @snappmarket/use-geolocation
OR
npm i @snappmarket/hooks
```

## usage 
```javascript
import useGeoLocation from '@snappmarket/use-geolocation';
// or 
// import { useGeoLocation } from '@snappmarket/hooks';


const MyComponenet = props => {
  const [position, error] = useGeoLocation(LOCATION_ACCESS_TIMEOUT || 5000);
};
```

### source code
```javascript
import { useEffect, useState } from 'react';

/**
 * Get access to geo location based on timeout
 * @note : if timeout error it will send TIMEOUT as error
 * @param timeout number
 * @param options object for getCurrentPosition options
 * @returns {[*, *]}
 */
const useGeoLocation = (timeout, options) => {
  let timeoutHandler;
  let canceled = false;

  const [position, setPosition] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    /**
     * Handle timeout clear
     */
    const timeoutCanceler = () => {
      clearTimeout(timeoutHandler);
    };

    /**
     * Success getting geolocation
     * @param pos
     */
    const successGetLocation = pos => {
      if (!canceled) {
        setPosition(pos);
      }
      timeoutCanceler();
    };

    /**
     * Failure getting geolocation
     * @param err
     */
    const failGetLocation = err => {
      if (!canceled) {
        setError(err);
      }
      timeoutCanceler();
    };

    timeoutHandler = setTimeout(() => {
      setError('TIMEOUT');
    }, timeout);

    /**
     * Get geolocation access of navigator
     */
    navigator.geolocation.getCurrentPosition(
      successGetLocation,
      failGetLocation,
      options
    );

    return () => {
      canceled = true;
    };
  }, [options]);

  return [position, error];
};

export default useGeoLocation;
```
