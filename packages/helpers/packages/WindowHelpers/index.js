/**
 * @function
 * @name getPathName
 * @description gets last part of URL and adds _page suffix to it
 * @param   pathname    {string}    pathname of window
 * @return {string}
 */
export const getPathName = pathname =>
  `${pathname === '/' ? 'home' : pathname.split('/')[1]}_page`;

/**
 * @function
 * @name getWindowSize
 * @description gets dimension  of the window
 * @return {{width: number, height: number}}
 */
export const getWindowSize = () => {
  const { clientWidth: width, clientHeight: height } = document.body;
  return {
    width,
    height,
  };
};
