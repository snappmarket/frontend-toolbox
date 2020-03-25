/**
 * @function
 * @name getOSName
 * @description returns the name of the operating system based on appVersion
 * @param   OSVersion   {string}    the full name of the navigator app version to fin OS name based on it
 * @return  {string}
 */
export const getOSName = OSVersion => {
  let OSName = OSVersion;
  const oSMapper = {
    Win: 'Windows',
    Mac: 'MacOS',
    X11: 'UNIX',
    Linux: 'Linux',
    Android: 'Android',
    iPhone: 'IOS',
  };
  Object.keys(oSMapper).forEach(key => {
    if (OSName.indexOf(key) !== -1) {
      OSName = oSMapper[key];
    }
  });
  return OSName;
};

/**
 * @function
 * @name getAgent
 * @description returns an object created of user agent and operating system
 * @return {{OSVersion: string, userAgent: string}}
 */
export const getAgent = () => {
  const { userAgent, appVersion } = navigator;

  return {
    userAgent,
    OSVersion: getOSName(appVersion),
  };
};
