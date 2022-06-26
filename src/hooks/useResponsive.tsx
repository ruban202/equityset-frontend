// @mui
import { useMediaQuery, useTheme, Breakpoint } from '@mui/material';

export default function useResponsive(
  query: 'up' | 'down' | 'between' | 'only',
  key: Breakpoint,
  start?: Breakpoint,
  end?: Breakpoint
) {
  const theme = useTheme();

  if (query === 'up') {
    const mediaUp = useMediaQuery(theme.breakpoints.up(key));
    return mediaUp;
  }

  if (query === 'down') {
    const mediaDown = useMediaQuery(theme.breakpoints.down(key));
    return mediaDown;
  }

  if (query === 'between' && !!start && !!end) {
    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));
    return mediaBetween;
  }

  if (query === 'only') {
    const mediaOnly = useMediaQuery(theme.breakpoints.only(key));
    return mediaOnly;
  }
  return null;
}
