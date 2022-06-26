import type { ReactElement } from 'react';

// @mui
import { Box, Card, Container, FilledInput, InputLabel, Stack, Typography } from '@mui/material';
// layouts
import DashboardLayout from '../layouts/dashboard';
// sections
import EditProfile from '../sections/profile/EditProfile';
import ProfileTabs from '../sections/profile/ProfileTabs';
// components
import Page from '../components/Page';

export default function DashboardPage() {
  return (
    <Page
      title="Dashboard"
      breadcrumbs={[
        { label: 'Profile', to: '/' },
        { label: 'Notifications', to: '/' },
      ]}
    >
      <Container maxWidth="lg">
        <EditProfile />
        <ProfileTabs />
        <Box sx={{ my: 3, py: 2, px: 5, bgcolor: 'background.neutral', borderRadius: 1.5 }}>
          <Box mb={3}>
            <Typography variant="h4">Notification & Alerts</Typography>
            <Typography variant="body2" color="text.secondary">
              Customize the notification and alerts experience
            </Typography>
          </Box>
          <Card sx={{ boxShadow: 'none', border: 1, borderColor: 'grey.300', py: 2, px: 3 }}>
            <InputLabel sx={{ typography: 'body2', color: 'text.primary' }}>Email</InputLabel>
            <Stack alignItems="center" direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Box>
                <FilledInput
                  disableUnderline
                  id="email"
                  size="small"
                  placeholder="konstantinos.a@toptal.com"
                  sx={{ bgcolor: 'grey.200', width: 312, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                  inputProps={{ sx: { py: 1.25 } }}
                />
              </Box>
              <Typography variant="body2" fontWeight={500}>
                This is the same email you have in your profile account.
              </Typography>
            </Stack>
          </Card>
        </Box>
      </Container>
    </Page>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
