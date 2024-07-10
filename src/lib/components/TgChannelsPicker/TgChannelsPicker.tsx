import { Box, List, ListItem, ListItemText, Switch, FormControlLabel, Typography, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { TgChannelListItem } from './useTgChannelsPickerLogic';

export interface TgChannelsPickerProps {
  channels: TgChannelListItem[];
  loadings: { isSomeChannelToggling: boolean };
  onTrackToggle: (channel: TgChannelListItem) => Promise<void>;
}

interface TgChannelPickerListItemProps extends TgChannelsPickerProps {
  channel: TgChannelListItem;
}

function TgChannelPickerListItem(props: TgChannelPickerListItemProps) {
  const [isToggling, setIsToggling] = useState(false);

  return (
    <ListItem
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 4 }}
    >
      <ListItemText primary={props.channel.title} />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {isToggling ? <CircularProgress size={24} sx={{ marginRight: 2 }} /> : null}
        <FormControlLabel
          control={
            <Switch
              disabled={props.loadings.isSomeChannelToggling || isToggling}
              checked={!!props.channel.is_tracked}
              onChange={async () => {
                try {
                  setIsToggling(true);
                  await props.onTrackToggle(props.channel);
                } finally {
                  setIsToggling(false);
                }
              }}
              color="primary"
            />
          }
          label="отслеживать"
          labelPlacement="start"
        />
      </Box>
    </ListItem>
  );
}

export const TgChannelsPicker: React.FC<TgChannelsPickerProps> = (props) => {
  const trackedItems = props.channels.filter(item => item.is_tracked);
  const availableItems = props.channels.filter(item => !item.is_tracked);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6">Отслеживаемые каналы</Typography>
      {trackedItems.length > 0 ? (
        <List>
          {trackedItems.map(channel => (
            <TgChannelPickerListItem key={channel.channel_id} channel={channel} {...props} />
          ))}
        </List>
      ) : (
        <Box sx={{ marginY: 2 }}><Typography>Отслеживаемые каналы не выбраны</Typography></Box>
      )}
      <Typography variant="h6">Доступные каналы</Typography>
      {availableItems.length > 0 ? (
        <List>
          {availableItems.map(channel => (
            <TgChannelPickerListItem key={channel.channel_id} channel={channel} {...props} />
          ))}
        </List>
      ) : (
        <Box sx={{ marginY: 2 }}><Typography>Доступные каналы не найдены</Typography></Box>
      )}
    </Box>
  );
};
