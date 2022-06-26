import * as React from 'react';
import { Box, Fade, Modal } from '@mui/material';

const sizes = {
  xxs: 0.24,
  xs: 0.36,
  sm: 0.48,
  md: 0.72,
  lg: 0.88,
};

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  size: 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
}

/**
 * Custom Modal component
 */
const CustomModal: React.FunctionComponent<ModalProps> = ({ open, onClose, children, size }) => {
  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: {
              xs: sizes['lg'],
              md: sizes[size],
            },
            height: size === 'xxs' ? sizes.sm : sizes.lg,
            backgroundColor: 'background.paper',
            borderWidth: 0,
            borderRadius: 1,
            boxShadow: 5,
            py: 2,
            px: 4,
            overflow: 'hidden',
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
