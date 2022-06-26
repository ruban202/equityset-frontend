import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Tabs, Tab, MenuItem, Stack, Divider } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import MenuPopover from '../../components/MenuPopover';

interface TabItemProps {
  label: string;
  to: string;
  submenu?: TabItemProps[];
}

function TabItem(props: TabItemProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tab
        component={'a'}
        disableRipple
        sx={{
          fontWeight: '500',
          px: 0.5,
          mx: 2,
          mb: -0.25,
          minWidth: 40,
        }}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          if (props.submenu) {
            handleClick(event);
          }
        }}
        icon={props.submenu ? <Iconify icon="ant-design:caret-down-filled" /> : ''}
        iconPosition="end"
        {...props}
      />
      <MenuPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: -1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Stack sx={{ p: 1 }}>
          {props.submenu?.map((nav) => (
            <MenuItem
              key={nav.label}
              onClick={() => {
                // router.push(nav.to);
                handleClose();
              }}
            >
              {nav.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}

export default function ProfileTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="nav menu">
        {[
          {
            label: 'Profile',
            to: '/profile',
          },
          {
            label: 'Pricing & Billing',
            to: '/pricing',
          },
          {
            label: 'Notification & Alerts',
            to: '/billing',
          },
          {
            label: 'My Portofolio',
            to: '/ideas',
          },
        ].map((nav) => (
          <TabItem key={nav.to} {...nav} />
        ))}
      </Tabs>
      <Divider sx={{ borderBottomWidth: 2, mt: -0.25 }} />
    </Box>
  );
}
