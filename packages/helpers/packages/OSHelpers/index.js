export const getOSName = OSVersion => {
  let OSName = OSVersion;
  const oSMapper = {
    Win    : 'Windows',
    Mac    : 'MacOS',
    X11    : 'UNIX',
    Linux  : 'Linux',
    Android: 'Android',
    iPhone : 'IOS'
  };
  Object.keys(oSMapper).forEach(key => {
    if (OSName.indexOf(key) !== -1) {
      OSName = oSMapper[key];
    }
  });
  return OSName;
};

export const getAgent = () => {
  const { userAgent, appVersion } = navigator;

  return {
    userAgent,
    OSVersion: getOSName(appVersion)
  };
};
