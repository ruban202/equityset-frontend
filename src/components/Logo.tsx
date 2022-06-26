import * as React from 'react';
import NextLink from 'next/link';
// @mui
import { Box, SxProps } from '@mui/material';

const Logo: React.FunctionComponent<{
  disabledLink?: boolean;
  sx?: SxProps;
}> = ({ disabledLink = false, sx = [] }) => {
  const logo = <Box component="img" src="/images/logo.svg" sx={{ width: 1, height: 24, cursor: 'pointer', ...sx }} />;

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
};

export default Logo;
