/**
 * @function
 * @name isLocationInIran
 * @description Check if user lat lng is in iran
 * @param   lat   {number}    latitude of the geo location
 * @param   lng   {number}    longitude of the geo location
 * @returns {boolean}
 */
export const isLocationInIran = (lat, lng) => {
  const fromLat = 39.823754275479594;
  const toLat = 24.52058991537379;

  const fromLng = 43.85770924535956;
  const toLng = 63.089348957768635;

  return lat <= fromLat && lat >= toLat && lng >= fromLng && lng <= toLng;
};
