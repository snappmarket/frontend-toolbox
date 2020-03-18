export const getPathName = pathname =>
  `${pathname === '/' ? 'home' : pathname.split('/')[1]}_page`;

export const getWindowSize = () => {
  const { clientWidth: width, clientHeight: height } = document.body;
  return {
    width,
    height,
  };
};
