import { Close } from '@mui/icons-material';
import { Box, Button, Card, IconButton, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

export interface ModalWrapperProps extends React.PropsWithChildren {
  label?: string
}

export const ModalWrapper: React.FC<ModalWrapperProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{props.label}</Button>
      <Modal open={open} onClose={handleClose} sx={{ p: 4 }}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',

        }}>
          <Card sx={{
            m: 4,
            p: 3
          }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h6">{props.label}</Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
            {props.children}
          </Card>
        </Box>
      </Modal>
    </div>
  );
};
