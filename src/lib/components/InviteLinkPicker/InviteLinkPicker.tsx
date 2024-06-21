import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Stack,
  Grid,
} from '@mui/material';
import { ExpandMore, Edit, Add, Delete, Check } from '@mui/icons-material';

export interface Item {
  id: number;
  name: string;
  link: string;
}

export interface Group {
  id: number;
  name: string;
  items: Item[];
}

export interface InviteLinkPickerProps {
  groups: Group[];
  handleCreateGroup: (groupName: string) => void;
  handleUpdateGroupName: (groupId: number, groupName: string) => void;
  handleDeleteGroup: (groupId: number) => void;
  handleCreateInviteLink: (inviteLink: string, label: string, groupId: number) => void;
  handleUpdateInviteLink: (linkId: number, inviteLink: string, label: string) => void;
  handleDeleteInviteLink: (linkId: number) => void;
}

export const InviteLinkPicker: React.FC<InviteLinkPickerProps> = (props) => {
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);
  const [groupEditIndex, setGroupEditIndex] = useState<number | null>(null);
  const [itemEditIndex, setItemEditIndex] = useState<{ group: number; item: number } | null>(null);
  const [newItemData, setNewItemData] = useState<{ [key: number]: { name: string; link: string } }>({});
  const [searchText, setSearchText] = useState<string>('');

  const filteredGroups = props.groups.filter(group => {
    const groupMatches = group.name.toLowerCase().includes(searchText.toLowerCase());
    const itemMatches = group.items.some(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.link.toLowerCase().includes(searchText.toLowerCase())
    );
    return groupMatches || itemMatches;
  });

  const handleAccordionChange = (groupIndex: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    if (groupEditIndex === null) {
      setExpandedGroup(isExpanded ? groupIndex : null);
    }
  };

  const handleAddInviteLink = (groupId: number) => {
    props.handleCreateInviteLink('Новая ссылка', 'Новая ссылка', groupId);
    const groupIndex = props.groups.findIndex(group => group.id === groupId);
    setItemEditIndex({ group: groupIndex, item: props.groups[groupIndex].items.length });
    setNewItemData({ ...newItemData, [groupId]: { name: 'Новая ссылка', link: '' } });
  };

  const handleUpdateNewItemData = (groupId: number, field: 'name' | 'link', value: string) => {
    setNewItemData({
      ...newItemData,
      [groupId]: {
        ...newItemData[groupId],
        [field]: value,
      },
    });
  };

  const handleSaveItem = (groupId: number, itemId: number) => {
    const updatedName = newItemData[groupId]?.name;
    const updatedLink = newItemData[groupId]?.link;

    if (updatedName !== undefined && updatedLink !== undefined) {
      props.handleUpdateInviteLink(itemId, updatedLink, updatedName);
    }
    setItemEditIndex(null);
  };

  return (
    <Box>
      <Stack spacing={2} direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Поиск"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          sx={{ minWidth: 'max-content' }}
          variant="contained"
          onClick={() => props.handleCreateGroup('Новая группа')}
        >
          Добавить группу ссылок
        </Button>
      </Stack>

      {filteredGroups.map((group, groupIndex) => (
        <Accordion key={group.id} expanded={expandedGroup === groupIndex} onChange={handleAccordionChange(groupIndex)}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel${groupIndex}-content`}
            id={`panel${groupIndex}-header`}
            onClick={(event) => {
              if (groupEditIndex === groupIndex) {
                event.stopPropagation();
              }
            }}
          >
            <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
              {groupEditIndex === groupIndex ? (
                <Box display="flex" alignItems="center">
                  <TextField
                    size="small"
                    value={group.name}
                    onChange={(e) => props.handleUpdateGroupName(group.id, e.target.value)}
                    autoFocus
                  />
                  <IconButton onClick={() => setGroupEditIndex(null)}>
                    <Check />
                  </IconButton>
                </Box>
              ) : (
                <Typography>
                  {group.name}
                </Typography>
              )}
              {groupEditIndex !== groupIndex && (
                <IconButton size="small" onClick={(e) => {
                  e.stopPropagation();
                  setGroupEditIndex(groupIndex);
                }}>
                  <Edit />
                </IconButton>
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {group.items.map((item, itemIndex) => (
              <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Box display="flex" alignItems="center" flexGrow={1}>
                  {itemEditIndex?.group === groupIndex && itemEditIndex.item === itemIndex ? (
                    <Box display="flex" alignItems="center" flexGrow={1}>
                      <TextField
                        size="small"
                        value={newItemData[group.id]?.name || item.name}
                        onChange={(e) => handleUpdateNewItemData(group.id, 'name', e.target.value)}
                        autoFocus
                      />
                      <TextField
                        size="small"
                        value={newItemData[group.id]?.link || item.link}
                        onChange={(e) => handleUpdateNewItemData(group.id, 'link', e.target.value)}
                      />
                      <IconButton onClick={() => handleSaveItem(group.id, item.id)}>
                        <Check />
                      </IconButton>
                    </Box>
                  ) : (
                    <Grid container>
                      <Grid item xs={12} md={6}>
                        <Typography>{item.name}</Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography>{item.link}</Typography>
                      </Grid>
                    </Grid>
                  )}
                </Box>
                <Box>
                  <IconButton size="small" onClick={(e) => {
                    e.stopPropagation();
                    setItemEditIndex({ group: groupIndex, item: itemIndex });
                    setNewItemData({ [group.id]: { name: item.name, link: item.link } });
                  }}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" onClick={() => props.handleDeleteInviteLink(item.id)}>
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
            ))}
            <Divider />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <IconButton size="small" onClick={() => handleAddInviteLink(group.id)}>
                <Add />
              </IconButton>
              <IconButton size="small" onClick={() => props.handleDeleteGroup(group.id)}>
                <Delete />
              </IconButton>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
