import * as React from 'react';
// @mui
import { Box } from '@mui/material';
// components
import DashboardNavbar from './DashboardNavbar';
// constants
import { APPBAR_MOBILE, APPBAR_DESKTOP } from '../../theme/constants';

const DashboardLayout: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <DashboardNavbar />
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          minHeight: '100%',
          paddingTop: {
            xs: `${APPBAR_MOBILE + 12}px`,
            md: `${APPBAR_DESKTOP + 12}px`,
          },
          pb: 2,
          px: { xs: 2, lg: 16 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
