import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Tabs, Tab, MenuItem, Stack } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import MenuPopover from '../../components/MenuPopover';

interface NavItemProps {
  label: string;
  to: string;
  submenu?: NavItemProps[];
}

function NavItem(props: NavItemProps) {
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
          p: 1,
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

export default function NavMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 1 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav menu"
        TabIndicatorProps={{
          sx: { height: 0, transition: 'none' },
        }}
      >
        {[
          {
            label: 'Today',
            to: '/today',
          },
          {
            label: 'Markets',
            to: '/markets',
          },
          {
            label: 'Screener',
            to: '/screener',
          },
          {
            label: 'Ideas',
            to: '/ideas',
          },
          {
            label: 'Learn',
            to: '/learn',
            submenu: [
              {
                label: 'Learn The Market',
                to: '/learn-market',
              },
            ],
          },
        ].map((nav) => (
          <NavItem key={nav.to} {...nav} />
        ))}
      </Tabs>
    </Box>
  );
}
