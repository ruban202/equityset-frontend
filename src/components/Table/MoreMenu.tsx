import { useRef, useState } from 'react';
// @mui
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from '../Iconify';

const MoreMenu: React.FunctionComponent<{
  handleDelete?: () => void;
  handleEdit?: () => void;
  handleClose?: () => void;
}> = ({ handleDelete, handleEdit, handleClose }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {!!handleDelete && (
          <MenuItem
            sx={{ color: 'text.secondary' }}
            onClick={() => {
              handleDelete();
              setIsOpen(false);
            }}
          >
            <ListItemIcon>
              <Iconify icon="eva:trash-2-outline" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
          </MenuItem>
        )}
        {!!handleEdit && (
          <MenuItem
            sx={{ color: 'text.secondary' }}
            onClick={() => {
              handleEdit();
              setIsOpen(false);
            }}
          >
            <ListItemIcon>
              <Iconify icon="eva:edit-fill" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
          </MenuItem>
        )}
        {!!handleClose && (
          <MenuItem
            sx={{ color: 'text.secondary' }}
            onClick={() => {
              handleClose();
              setIsOpen(false);
            }}
          >
            <ListItemIcon>
              <Iconify icon="eva:close-circle-fill" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="Close" primaryTypographyProps={{ variant: 'body2' }} />
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default MoreMenu;
