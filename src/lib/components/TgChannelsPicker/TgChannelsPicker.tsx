import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

export interface TgChannelsPickerProps {
  channels: { tg_channel_id: string }[];
}

export const TgChannelsPicker: React.FC<TgChannelsPickerProps> = (props) => {
  return (
    <Box>
      {props.channels.length === 0 ? (
        <Typography variant="body1">Обратитесь в поддержку чтобы добавить каналы</Typography>
      ) : (
        <List>
          {props.channels.map(channel => (
            <ListItem key={channel.tg_channel_id}>
              <ListItemText primary={channel.tg_channel_id} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
