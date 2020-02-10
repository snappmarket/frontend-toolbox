import snappMarketTheme from './theme';
export const makeTheme = (theme = {}) => ({ ...snappMarketTheme, ...theme });
