import type { ReactElement } from 'react';

// @mui
import { Container } from '@mui/material';
// layouts
import DashboardLayout from '../layouts/dashboard';
// sections
import EditProfile from '../sections/profile/EditProfile';
import ProfileTabs from '../sections/profile/ProfileTabs';
// components
import Page from '../components/Page';
import Notification from '../sections/profile/Notification';

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
        <Notification />
      </Container>
    </Page>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
