import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Iconify from './Iconify';

const ModalHeader: React.FunctionComponent<{
  title: string;
  handleClose: () => void;
}> = ({ title, handleClose }) => (
  <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', py: 1 }}>
    <Typography variant="h4">{title}</Typography>
    <IconButton onClick={handleClose}>
      <Iconify height={30} width={30} icon="eva:close-fill" />
    </IconButton>
  </Box>
);

export default ModalHeader;
