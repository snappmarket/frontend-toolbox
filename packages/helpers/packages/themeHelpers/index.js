import { hexToRgb } from '@snappmarket/helpers';

/**
 * Will handle every thing about rem, just supply the value
 */
export const rem = function remSizes() {
  return props =>
    // eslint-disable-next-line prefer-rest-params
    [...arguments]
      .map(size =>
        // eslint-disable-next-line no-nested-ternary
        size
          ? typeof size !== 'number'
            ? size
            : props.theme.defaultRem.replace(/(.*)rem/g, `${size}rem`)
          : '0',
      )
      .join(' ');
};

/**
 * Make a color, or a shade of color
 * @param name
 * @param shade
 * @returns {function(*): string}
 */
export const color = (name, shade = false) => props =>
  shade ? `${props.theme.colors[name][shade]}` : `${props.theme.colors[name]}`;

/**
 * Make a color, or a shade of color
 * @param size
 * @returns {function(*): string}
 */
export const viewport = (size, threshold = 0) => props =>
  `${props.theme.viewports[size] - threshold}px`;

/**
 * Make rgba from a passed color
 * @param opacity
 * @param name
 * @param shade
 * @returns {function(*=): string}
 */
export const makeRgba = (opacity, name, shade = false) => props => {
  const rgb = hexToRgb(color(name, shade)(props));
  return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`;
};
