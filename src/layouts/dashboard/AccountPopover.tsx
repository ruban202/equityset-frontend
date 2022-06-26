import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { faker } from '@faker-js/faker';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Badge } from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  // {
  //   label: 'Profile',
  //   icon: 'eva:person-fill',
  //   linkTo: '#',
  // },
  // {
  //   label: 'Settings',
  //   icon: 'eva:settings-2-fill',
  //   linkTo: '#',
  // },
];

const user = {
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  picture: faker.internet.avatar(),
};

export default function AccountPopover() {
  const anchorRef = useRef(null);
  const router = useRouter();

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Badge variant="dot" color="error" overlap="circular">
        <IconButton
          ref={anchorRef}
          onClick={handleOpen}
          sx={{
            p: 0,
            ...(open && {
              '&:before': {
                zIndex: 1,
                content: "''",
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}
        >
          <Avatar src={user.picture} alt="photoURL" />
        </IconButton>
      </Badge>
      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        {user && (
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant="subtitle2" noWrap>
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {user.email}
            </Typography>
          </Box>
        )}

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => {
                router.push(option.linkTo);
                handleClose();
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => {
            if (user) {
              router.push('/api/auth/logout');
            } else {
              router.push('/api/auth/login');
            }

            handleClose();
          }}
          sx={{ m: 1 }}
        >
          {user ? 'Logout' : 'Login'}
        </MenuItem>
      </MenuPopover>
    </>
  );
}
