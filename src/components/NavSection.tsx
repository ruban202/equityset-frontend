import * as React from 'react';
import { useRouter } from 'next/router';
import { alpha, useTheme } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
// components
import Iconify from './Iconify';

interface NavItemProp {
  title: string;
  path: string;
  icon: React.ReactElement;
  info?: React.ReactElement;
  children?: { title: string; path: string }[];
}

const NavItem: React.FunctionComponent<{
  item: NavItemProp;
  active: boolean;
}> = ({ item, active }) => {
  const theme = useTheme();
  const router = useRouter();

  const { title, icon, info, children, path } = item;

  const [open, setOpen] = React.useState<boolean>(active);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: 'primary.main',
    fontWeight: 'fontWeightMedium',
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  const activeSubStyle = {
    color: 'text.primary',
    fontWeight: 'fontWeightMedium',
  };

  const listItemStyle = {
    typography: 'body2',
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: 'text.secondary',
    borderRadius: 1,
  };

  const listItemIconStyle = {
    width: 22,
    height: 22,
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (children) {
    return (
      <>
        <ListItemButton
          onClick={handleOpen}
          sx={{
            ...(active && activeRootStyle),
            ...listItemStyle,
          }}
        >
          <ListItemIcon sx={listItemIconStyle}>{icon && icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Iconify
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            width={16}
            height={16}
            sx={{ ml: 1 }}
          />
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children?.map((item) => {
              const { title, path } = item;
              const isActiveSub = true;

              return (
                <ListItemButton
                  key={title}
                  onClick={() => router.push(path)}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                    ...listItemStyle,
                  }}
                >
                  <ListItemIcon>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: 'flex',
                        borderRadius: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: isActiveSub ? 'scale(2)' : (theme) => theme.transitions.create('transform'),
                        bgcolor: isActiveSub ? 'primary.main' : 'text.disabled',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText disableTypography primary={title} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemButton
      onClick={() => router.push(path)}
      sx={{
        ...(active && activeRootStyle),
        ...listItemStyle,
      }}
    >
      <ListItemIcon sx={listItemIconStyle}>{icon && icon}</ListItemIcon>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </ListItemButton>
  );
};

const NavSection: React.FunctionComponent<{ navConfig: NavItemProp[] }> = ({ navConfig, ...other }) => {
  const { asPath } = useRouter();

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <NavItem key={item.title} item={item} active={item.path === asPath} />
        ))}
      </List>
    </Box>
  );
};

export default NavSection;
