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
    const successGetLocation = (pos) => {
      if (!canceled) {
        setPosition(pos);
      }
      timeoutCanceler();
    };

    /**
     * Failure getting geolocation
     * @param err
     */
    const failGetLocation = (err) => {
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
      options,
    );

    return () => {
      canceled = true;
    };
  }, [options]);

  return [position, error];
};

export default useGeoLocation;
