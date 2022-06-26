import * as React from 'react';
// @mui
import { Box, Stack, AppBar, Container } from '@mui/material';
// components
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import Logo from '../../components/Logo';
import NavMenu from './NavMenu';
// import LanguagePopover from './LanguagePopover';
// import NotificationsPopover from './NotificationsPopover';
// constants
import { APPBAR_MOBILE, APPBAR_DESKTOP } from '../../theme/constants';

const DashboardNavbar: React.FunctionComponent<{}> = () => {
  return (
    <Box
      component={AppBar}
      sx={{
        boxShadow: 'none',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
        bgcolor: 'background.default',
        width: 1,
        border: 0,
        borderBottomWidth: 1.5,
        borderColor: 'grey.300',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          minHeight: { xs: APPBAR_MOBILE, lg: APPBAR_DESKTOP },
        }}
      >
        <Box sx={{ pt: 1, display: 'inline-flex' }}>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box display="flex" flexDirection="row" alignItems="center">
          <Searchbar />
          <NavMenu />
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {/* <LanguagePopover />
          <NotificationsPopover /> */}
          <AccountPopover />
        </Stack>
      </Container>
    </Box>
  );
};

export default DashboardNavbar;
