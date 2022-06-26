import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: typeof customShadows;
  }

  interface Palette {
    chart: typeof palette.chart;
    gradients: typeof palette.gradients;
  }
}

const themeOptions = {
  palette,
  shape: { borderRadius: 8 },
  typography,
  shadows,
  customShadows,
};

const theme = createTheme(themeOptions);
theme.components = componentsOverride(theme);

export default theme;
