// src/components/InviteLinkPickerModal.tsx
import { InviteLinkPicker, InviteLinkPickerProps } from '@/lib/components/InviteLinkPicker/InviteLinkPicker';
import { Close } from '@mui/icons-material';
import { Box, Button, Card, IconButton, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';

export interface InviteLinkPickerModalProps extends InviteLinkPickerProps { }

export const InviteLinkPickerModal: React.FC<InviteLinkPickerModalProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ссылки</Button>
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
              <Typography variant="h6">Ссылки</Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
            <InviteLinkPicker {...props} />
          </Card>
        </Box>
      </Modal>
    </div>
  );
};
