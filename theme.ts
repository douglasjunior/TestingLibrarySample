import {createTheming} from '@callstack/react-theme-provider';

export const DefaultTheme = {
  doo: 'bar',
};

export type ThemeType = typeof DefaultTheme;

export const {ThemeProvider, withTheme, useTheme} =
  createTheming<ThemeType>(DefaultTheme);
