import { theme as ToolboxTheme } from '@snappmarket/config';

export const makeTheme = (theme = {}) => ({ ...ToolboxTheme, ...theme });
