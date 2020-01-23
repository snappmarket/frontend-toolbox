/**
 * Set a cookie
 * @param name
 * @param value
 * @param expireDays
 * @param path
 */
export const setCookie = (name, value, expireDays = 90, path = '/') => {
  const d = new Date();
  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=${path}`;
};
