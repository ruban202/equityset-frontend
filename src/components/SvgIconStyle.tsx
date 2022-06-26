import * as React from 'react';
import { Box, SxProps } from '@mui/material';

const SvgIconStyle: React.FunctionComponent<{ src: string; sx: SxProps }> = ({ src, sx }) => {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
};

export default SvgIconStyle;
