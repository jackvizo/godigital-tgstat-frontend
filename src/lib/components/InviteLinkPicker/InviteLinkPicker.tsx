// src/components/InviteLinkPicker.tsx
import React, { useState, useEffect } from 'react';
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
  name: string;
  link: string;
}

export interface Group {
  name: string;
  items: Item[];
}

export interface InviteLinkPickerProps {
  initialGroups: Group[];
  onGroupsChange: (groups: Group[]) => void;
}

export const InviteLinkPicker: React.FC<InviteLinkPickerProps> = ({ initialGroups, onGroupsChange }) => {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);
  const [groupEditIndex, setGroupEditIndex] = useState<number | null>(null);
  const [itemEditIndex, setItemEditIndex] = useState<{ group: number; item: number } | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    onGroupsChange(groups);
  }, [groups, onGroupsChange]);

  const handleAddGroup = () => {
    const newGroup: Group = { name: 'Новая группа', items: [] };
    setGroups([...groups, newGroup]);
    setGroupEditIndex(groups.length);
  };

  const handleAddItem = (groupIndex: number) => {
    const newGroups = [...groups];
    newGroups[groupIndex].items.push({ name: 'Новая ссылка', link: '' });
    setGroups(newGroups);
    setItemEditIndex({ group: groupIndex, item: newGroups[groupIndex].items.length - 1 });
  };

  const handleDeleteGroup = (groupIndex: number) => {
    const newGroups = groups.filter((_, index) => index !== groupIndex);
    setGroups(newGroups);
  };

  const handleDeleteItem = (groupIndex: number, itemIndex: number) => {
    const newGroups = [...groups];
    newGroups[groupIndex].items = newGroups[groupIndex].items.filter((_, index) => index !== itemIndex);
    setGroups(newGroups);
  };

  const handleGroupNameChange = (groupIndex: number, newName: string) => {
    const newGroups = [...groups];
    newGroups[groupIndex].name = newName;
    setGroups(newGroups);
  };

  const handleItemNameChange = (groupIndex: number, itemIndex: number, newName: string) => {
    const newGroups = [...groups];
    newGroups[groupIndex].items[itemIndex].name = newName;
    setGroups(newGroups);
  };

  const handleItemLinkChange = (groupIndex: number, itemIndex: number, newLink: string) => {
    const newGroups = [...groups];
    newGroups[groupIndex].items[itemIndex].link = newLink;
    setGroups(newGroups);
  };

  const handleSaveGroupName = () => {
    setGroupEditIndex(null);
  };

  const handleSaveItemName = () => {
    setItemEditIndex(null);
  };

  const handleAccordionChange = (groupIndex: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    if (groupEditIndex === null) {
      setExpandedGroup(isExpanded ? groupIndex : null);
    }
  };

  const filteredGroups = groups.filter(group => {
    const groupMatches = group.name.toLowerCase().includes(searchText.toLowerCase());
    const itemMatches = group.items.some(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.link.toLowerCase().includes(searchText.toLowerCase())
    );
    return groupMatches || itemMatches;
  });

  return (
    <Box>
      <Stack spacing={2} direction="row" justifyContent='space-between' sx={{ mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Поиск"
          variant="outlined"
          size='small'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          sx={{ minWidth: 'max-content' }}
          variant="contained"
          onClick={handleAddGroup}
        >
          Добавить группу ссылок
        </Button>
      </Stack>

      {filteredGroups.map((group, groupIndex) => (
        <Accordion key={groupIndex} expanded={expandedGroup === groupIndex} onChange={handleAccordionChange(groupIndex)} >
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
                    onChange={(e) => handleGroupNameChange(groupIndex, e.target.value)}
                    autoFocus
                  />
                  <IconButton onClick={handleSaveGroupName}>
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
              <Box key={itemIndex} display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                <Box display="flex" alignItems="center" width="80%">
                  {itemEditIndex?.group === groupIndex && itemEditIndex.item === itemIndex ? (
                    <Box display="flex" alignItems="center" width="100%">
                      <TextField
                        size="small"
                        value={item.name}
                        onChange={(e) => handleItemNameChange(groupIndex, itemIndex, e.target.value)}
                        autoFocus
                        sx={{ mr: 2 }}
                      />
                      <TextField
                        size="small"
                        placeholder="Ссылка"
                        value={item.link}
                        onChange={(e) => handleItemLinkChange(groupIndex, itemIndex, e.target.value)}
                        sx={{ flexGrow: 1 }}
                      />
                      <IconButton onClick={handleSaveItemName}>
                        <Check />
                      </IconButton>
                    </Box>
                  ) : (
                    <Grid container display="flex" alignItems="center" width="100%">
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ mr: 2 }}>{item.name}</Typography>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography sx={{ flexGrow: 1 }}>{item.link}</Typography>
                      </Grid>
                    </Grid>
                  )}
                </Box>
                <Box>
                  <IconButton size="small" onClick={(e) => {
                    e.stopPropagation();
                    setItemEditIndex({ group: groupIndex, item: itemIndex });
                  }}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" onClick={() => handleDeleteItem(groupIndex, itemIndex)}>
                    <Delete />
                  </IconButton>
                </Box>
              </Box>
            ))}
            <Divider />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <IconButton size="small" onClick={() => handleAddItem(groupIndex)}>
                <Add />
              </IconButton>
              <IconButton size="small" onClick={() => handleDeleteGroup(groupIndex)}>
                <Delete />
              </IconButton>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
