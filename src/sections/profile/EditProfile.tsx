import { useRef, useState } from 'react';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
// @mui
import { Box, Button, ButtonBase, Stack, TextField, Typography } from '@mui/material';
// components
import Iconify from '../../components/Iconify';

const user = {
  username: 'anastako21',
  picture: faker.internet.avatar(),
};

export default function EditProfile() {
  const [editing, setEditing] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  return (
    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" py={10}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box
          sx={{
            display: 'inline-flex',
            boxSizing: 'border-box',
            position: 'relative',
            height: 96,
            width: 96,
            borderRadius: 1,
          }}
        >
          <Box component={Image} sx={{ borderRadius: 1 }} layout="fill" src={user.picture} alt="photoURL" />
          <Box
            component={ButtonBase}
            sx={{
              position: 'absolute',
              width: 24,
              height: 24,
              bgcolor: 'grey.200',
              color: 'primary.main',
              borderRadius: 0.5,
              bottom: -4,
              right: -4,
              boxShadow: 1,
            }}
          >
            <Iconify icon="ci:edit" height={24} width={24} />
          </Box>
        </Box>
        <Box ml={2}>
          <TextField
            inputRef={usernameRef}
            variant="standard"
            value={user.username}
            sx={{ display: editing ? 'block' : 'none' }}
            inputProps={{ sx: { typography: 'h4' } }}
          />
          <Typography variant="h4" sx={{ display: editing ? 'none' : 'block' }}>
            {user.username}
          </Typography>

          <Typography variant="body2" color="text.secondary" component="span">
            This is used to display your name publically across the platform.
          </Typography>
          <Typography variant="body2" fontWeight={500} component="span" ml={1}>
            You can change the public username only once.
          </Typography>
        </Box>
      </Box>

      <Button
        onClick={() => {
          setEditing(!editing);
          setTimeout(() => {
            usernameRef.current?.focus();
          }, 10);
        }}
        variant="text"
        color="primary"
        sx={{
          height: 32,
          fontWeight: 500,
          textDecoration: 'underline',
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {editing ? 'Save' : 'Edit Username'}
      </Button>
    </Box>
  );
}
