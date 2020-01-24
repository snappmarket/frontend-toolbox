const DEFAULT_REM = '1rem';

/**
 * Convert hex to rgba
 * @param hex
 * @returns {{red: number, green: number, blue: number}}
 * @constructor
 */
export const HexToRgb = hex => {
  if (!hex) {
    return { red: 0, green: 0, blue: 0 };
  }
  const hexColor = hex.replace('#', '');

  const rgb = {};
  rgb.red = parseInt(hexColor.substr(0, 2), 16);
  rgb.green = parseInt(hexColor.substr(2, 2), 16);
  rgb.blue = parseInt(hexColor.substr(4, 2), 16);

  return rgb;
};

/**
 * Decide between darkness and lightness
 * @param color
 * @returns {string}
 */
export const defineForegroundColor = color => {
  const rgb = HexToRgb(color);
  const average = (rgb.red * 299 + rgb.green * 587 + rgb.blue * 114) / 1000;
  return average > 128 ? 'taupe' : 'white';
};

/**
 * Make an rgba color from a hex
 * @param opacity
 * @param color
 * @returns {string}
 */
export const makeRgba = (opacity, color) => {
  const rgb = HexToRgb(color);
  return `rgba(${rgb.red},${rgb.green},${rgb.blue}, ${opacity})`;
};

/**
 * Decide between rem and percent values
 * @param measurement
 * @returns {string}
 */
export const decideMeasurement = measurement =>
  typeof measurement === 'string'
    ? measurement
    : `calc(${DEFAULT_REM} * ${measurement})`;

/**
 * Will create shadow in easy way
 * @param hOffset
 * @param vOffset
 * @param blur
 * @param spread
 * @param color
 * @param inset
 * @returns {function(*): string}
 */
export const makeShadow = (
  hOffset,
  vOffset,
  blur,
  spread,
  color,
  inset = false
) => () =>
  `calc(${DEFAULT_REM} * ${hOffset})
  calc(${DEFAULT_REM} * ${vOffset}) 
  calc(${DEFAULT_REM} * ${blur}) 
  calc(${DEFAULT_REM} * ${spread}) 
  ${color} 
  ${inset || ''}
`;
