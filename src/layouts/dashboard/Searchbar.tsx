import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import {
  Input,
  Slide,
  Button,
  IconButton,
  InputAdornment,
  ClickAwayListener,
  Box,
  InputBase,
  useTheme,
} from '@mui/material';
// component
import Iconify from '../../components/Iconify';
// constants
import { APPBAR_MOBILE, APPBAR_DESKTOP } from '../../theme/constants';

export default function Searchbar() {
  const theme = useTheme();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            bgcolor: alpha(theme.palette.grey[300], 0.5),
            width: {
              xs: 'auto',
              sm: 1,
            },
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box
            component={InputBase}
            sx={{
              height: 44,
              color: 'text.secondary',
              '& .MuiInputBase-input': {
                py: 1,
                px: 1.5,
                // vertical padding + font size from searchIcon
                pr: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                  width: '20ch',
                  '&:focus': {
                    width: '30ch',
                  },
                },
              },
            }}
            placeholder="Type “/” to focus"
            inputProps={{ 'aria-label': 'search' }}
          />
          <Box
            sx={{
              height: 32,
              width: 32,
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              borderRadius: 1.5,
              top: 6,
              right: 8,
            }}
          >
            <Iconify icon="eva:search-fill" />
          </Box>
        </Box>

        {!isOpen && (
          <Box sx={{ justifyContent: 'flex-end', display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpen}>
              <Iconify icon="eva:search-fill" />
            </IconButton>
          </Box>
        )}
        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <Box
            sx={{
              top: 0,
              left: 0,
              zIndex: 99,
              width: '100%',
              display: 'flex',
              position: 'absolute',
              alignItems: 'center',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
              boxShadow: theme.customShadows.z8,
              backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
              height: { xs: APPBAR_MOBILE, md: APPBAR_DESKTOP },
              px: { xs: 3, md: 5 },
            }}
          >
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" width={20} height={20} sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
            />
            <Button variant="contained" onClick={handleClose}>
              Search
            </Button>
          </Box>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
