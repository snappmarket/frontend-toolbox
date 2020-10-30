import { useEffect, useRef, useState } from 'react';

/**
 * @function
 * @name useTimer
 * @description A hook that count till time or increase time
 * @param config
 * @returns {{start: *, reset: *, time: *, pause: *}}
 */
export default function useTimer(config) {
  const initialConfig = {
    endTime: null,
    initialTime: 0,
    interval: 1000,
    step: 1,
    timerType: 'INCREMENTAL',
  };

  const { endTime, initialTime, interval, step, timerType } = {
    ...initialConfig,
    ...config,
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
        timerType === 'INCREMENTAL' ? previousTime + step : previousTime - step,
      );
    }, interval);
  };
  const createTimeout = () => {
    if (endTime === null) {
      return;
    }
    const delay =
      Math.abs(endTime - (pausedTimeRef.current || initialTime)) * interval;
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

  return {
    pause,
    reset,
    start,
    time,
  };
};
