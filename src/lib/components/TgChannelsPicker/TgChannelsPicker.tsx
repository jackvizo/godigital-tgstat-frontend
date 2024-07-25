import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography, CircularProgress, TextField, IconButton, Tooltip, Checkbox } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { TgChannelListItem } from './useTgChannelsPickerLogic';
import { LoadingButton } from '@/lib/components/LoadingButton/LoadingButton';

export interface TgChannelsPickerProps {
  foundChannels: TgChannelListItem[];
  trackedChannels: TgChannelListItem[]
  loadings: { isSomeChannelToggling: boolean; isSearching: boolean };
  isNoChannelsFound: boolean;
  titleSearch: string | undefined;
  onTrackToggle: (channel: TgChannelListItem) => Promise<void>;
  onCheckToggle: (channel: TgChannelListItem, isChecked: boolean) => void;
  onSearchClick: (searchTerm: string) => void;
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {props.channel.is_checked !== undefined ? (
          <Tooltip title={props.channel.is_checked ? "Убрать из учета в статистике" : "Учитывать в статистике"}>
            <Checkbox
              checked={!!props.channel.is_checked}
              onChange={() => props.onCheckToggle(props.channel, !props.channel.is_checked)}
            />
          </Tooltip>
        ) : null}
        <ListItemText primary={props.channel.tg_channel_title} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {isToggling ? <CircularProgress size={24} sx={{ marginRight: 2 }} /> : null}
        <Tooltip title={props.channel.is_tracked ? "Прекратить отслеживание. Статистика не будет собираться." : "Отслеживать канал. Статистика будет обновляться каждый час."}>
          <IconButton
            disabled={props.loadings.isSomeChannelToggling || isToggling}
            onClick={async () => {
              try {
                setIsToggling(true);
                await props.onTrackToggle(props.channel);
              } finally {
                setIsToggling(false);
              }
            }}
          >
            {props.channel.is_tracked ? (
              <RemoveCircleOutlineIcon color="disabled" />
            ) : (
              <AddCircleOutlineIcon color="primary" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </ListItem>
  );
}

export const TgChannelsPicker: React.FC<TgChannelsPickerProps> = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearchClick(searchTerm);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <form onSubmit={handleSearchSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, gap: 1 }}>
          <TextField
            fullWidth
            placeholder="Название канала в telegram"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <Tooltip title="Поиск только среди каналов, для которых есть права администратора">
                  <IconButton>
                    <HelpOutlineIcon />
                  </IconButton>
                </Tooltip>
              )
            }}
          />
          <LoadingButton
            variant="contained"
            color="primary"
            sx={{ minWidth: 130 }}
            onClick={() => props.onSearchClick(searchTerm)}
            loading={props.loadings.isSearching}
            disabled={props.loadings.isSearching}
            type="submit"
          >
            Поиск
          </LoadingButton>
        </Box>
      </form>
      <Typography variant="h6">Результаты поиска</Typography>
      {!props.loadings.isSearching && props.foundChannels.length > 0 ? (
        <List sx={{ maxHeight: 300, overflow: 'auto' }}>
          {props.foundChannels.map(channel => (
            <TgChannelPickerListItem key={channel.tg_channel_id} channel={channel} {...props} />
          ))}
        </List>
      ) : null}
      {props.foundChannels.length < 1 && !props.titleSearch && !props.isNoChannelsFound ?
        (
          <Box sx={{ marginY: 2 }}><Typography>Введите название канала в поиск</Typography></Box>
        ) : null}
      {props.isNoChannelsFound ?
        (
          <Box sx={{ marginY: 2 }}><Typography>Каналы не найдены</Typography></Box>
        ) : null}
      {props.loadings.isSearching ? (
        <Box sx={{ marginY: 2 }}><Typography>Идет поиск...</Typography></Box>
      ) : null}
      <Typography variant="h6">Отслеживаемые каналы</Typography>
      {props.trackedChannels.length > 0 ? (
        <List sx={{ maxHeight: 300, overflow: 'auto' }}>
          {props.trackedChannels.map(channel => (
            <TgChannelPickerListItem key={channel.tg_channel_id} channel={channel} {...props} />
          ))}
        </List>
      ) : (
        <Box sx={{ marginY: 2 }}><Typography>Пока ни один канал не отслеживается</Typography></Box>
      )}
    </Box>
  );
};
