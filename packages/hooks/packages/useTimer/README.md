# useTimer
> ⏱ easily handle timing
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
npm i @snappmarket/use-timer
OR
npm i @snappmarket/hooks
```

## usage 
```javascript
import useTimer from '@snappmarket/use-timer';
// or 
// import { useTimer } from '@snappmarket/hooks';


const MyComponenet = props => {
  const { time, start: startTimer, reset: resetTimer } = useTimer({
    endTime: 0,
    initialTime: 100,
    timerType: 'DECREMENTAL',
  });
};
```

### source code
```javascript
import { useEffect, useRef, useState } from 'react';

/**
 * Will count till time or increase time
 * @param config
 * @returns {{start: *, reset: *, time: *, pause: *}}
 */
export default config => {
  const initialConfig = {
    endTime    : null,
    initialTime: 0,
    interval   : 1000,
    step       : 1,
    timerType  : 'INCREMENTAL'
  };

  const { endTime, initialTime, interval, step, timerType } = {
    ...initialConfig,
    ...config
  };
  const intervalRef = useRef(null);
  const pausedTimeRef = useRef(null);
  const timeoutRef = useRef(null);
  const [shouldResetTime, setShouldResetTime] = useState(false);
  const [time, setTime] = useState(initialTime);
  const cancelTimers = () => {
    cancelInterval();
    cancelTimeout();
  };
  const cancelInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const cancelTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const createInterval = () => {
    intervalRef.current = setInterval(() => {
      setTime(previousTime =>
        timerType === 'INCREMENTAL' ? previousTime + step : previousTime - step);
    }, interval);
  };
  const createTimeout = () => {
    if (endTime === null) {
      return;
    }
    const delay
      = Math.abs(endTime - (pausedTimeRef.current || initialTime)) * interval;
    timeoutRef.current = setTimeout(() => {
      cancelInterval();
      setShouldResetTime(true);
    }, delay);
  };
  const pause = () => {
    pausedTimeRef.current = time;
    cancelTimers();
  };
  const reset = () => {
    pausedTimeRef.current = null;
    cancelTimers();
    resetTime();
  };

  const resetTime = () => {
    setTime(initialTime);
  };

  const start = () => {
    if (intervalRef.current) {
      return;
    }
    if (shouldResetTime) {
      resetTime();
      setShouldResetTime(false);
    }
    createInterval();
    createTimeout();
  };
  useEffect(() => cancelTimers, []);

  /**
   * Cancel all timers and start my timer at mount
   */
  useEffect(() => {
    cancelTimers();
    start();

    return cancelTimeout;
  }, []);

  return { pause, reset, start, time };
};
```


