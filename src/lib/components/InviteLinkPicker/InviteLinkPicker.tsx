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
  CircularProgress,
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
  handleCreateGroup: (groupName: string) => Promise<void>;
  handleUpdateGroupName: (groupId: number, groupName: string) => Promise<void>;
  handleDeleteGroup: (groupId: number) => Promise<void>;
  handleCreateInviteLink: (inviteLink: string, label: string, groupId: number) => Promise<void>;
  handleUpdateInviteLink: (linkId: number, inviteLink: string, label: string) => Promise<void>;
  handleDeleteInviteLink: (linkId: number) => Promise<void>;
}

export function InviteLinkPicker(props: InviteLinkPickerProps) {
  const { handleAddInviteLink, handleSearchTextChange, searchText, filteredGroups } = useInviteLinkPickerLogic(props);

  return (
    <Box>
      <Stack spacing={2} direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <TextField
          fullWidth
          placeholder="Поиск"
          variant="outlined"
          size="small"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Stack>
      <Button
        variant="contained"
        sx={{ mb: 2 }} // Add margin bottom to button
        onClick={() => props.handleCreateGroup('Новая группа ссылок')}
      >
        Добавить группу ссылок
      </Button>

      {filteredGroups.map((group, groupIndex) => (
        <GroupComponent
          key={group.id}
          group={group}
          groupIndex={groupIndex}
          handleUpdateGroupName={props.handleUpdateGroupName}
          handleDeleteGroup={props.handleDeleteGroup}
          handleAddInviteLink={handleAddInviteLink}
          handleUpdateInviteLink={props.handleUpdateInviteLink}
          handleDeleteInviteLink={props.handleDeleteInviteLink}
        />
      ))}
    </Box>
  );
}

interface GroupComponentProps {
  group: Group;
  groupIndex: number;
  handleUpdateGroupName: (groupId: number, groupName: string) => Promise<void>;
  handleDeleteGroup: (groupId: number) => Promise<void>;
  handleAddInviteLink: (groupId: number) => Promise<void>;
  handleUpdateInviteLink: (linkId: number, inviteLink: string, label: string) => Promise<void>;
  handleDeleteInviteLink: (linkId: number) => Promise<void>;
}

function GroupComponent(props: GroupComponentProps) {
  const { groupEditMode, groupName, handleGroupNameChange, setGroupEditMode, itemEditIndex, setItemEditIndex, newItemData, handleUpdateNewItemData, handleSaveItem, expanded, handleAccordionChange, saving, handleSaveGroupName, handleAddInviteLink } = useGroupComponentLogic(props);

  return (
    <Accordion expanded={expanded} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        onClick={(event) => {
          if (groupEditMode) {
            event.stopPropagation();
          }
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          {groupEditMode ? (
            <Box display="flex" alignItems="center" onClick={(event) => event.stopPropagation()}>
              <TextField
                size="small"
                value={groupName}
                onChange={handleGroupNameChange}
                autoFocus
                sx={{ mr: 1 }} // Add margin right
              />
              {saving ? (
                <CircularProgress size={24} sx={{ ml: 1 }} />
              ) : (
                <IconButton onClick={handleSaveGroupName} disabled={saving}>
                  <Check />
                </IconButton>
              )}
            </Box>
          ) : (
            <Typography>{props.group.name}</Typography>
          )}
          {!groupEditMode && (
            <IconButton size="small" onClick={(event) => { event.stopPropagation(); setGroupEditMode(true); }}>
              <Edit />
            </IconButton>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {props.group.items.map((item, itemIndex) => (
          <ItemComponent
            key={item.id}
            item={item}
            groupId={props.group.id}
            itemIndex={itemIndex}
            itemEditIndex={itemEditIndex}
            setItemEditIndex={setItemEditIndex}
            newItemData={newItemData}
            handleUpdateNewItemData={handleUpdateNewItemData}
            handleSaveItem={handleSaveItem}
            handleDeleteInviteLink={props.handleDeleteInviteLink}
            handleUpdateInviteLink={props.handleUpdateInviteLink}
          />
        ))}
        <Divider />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <IconButton size="small" onClick={handleAddInviteLink}>
            <Add />
          </IconButton>
          <IconButton size="small" onClick={() => props.handleDeleteGroup(props.group.id)}>
            <Delete />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

interface ItemComponentProps {
  item: Item;
  groupId: number;
  itemIndex: number;
  itemEditIndex: number | null;
  setItemEditIndex: (index: number | null) => void;
  newItemData: { name: string; link: string };
  handleUpdateNewItemData: (field: 'name' | 'link', value: string) => void;
  handleSaveItem: (groupId: number, itemId: number) => void;
  handleDeleteInviteLink: (linkId: number) => void;
  handleUpdateInviteLink: (linkId: number, inviteLink: string, label: string) => Promise<void>;
}

function ItemComponent(props: ItemComponentProps) {
  const { handleItemEdit, handleDeleteInviteLink, saving, handleSaveItem } = useItemComponentLogic(props);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
      <Grid container spacing={1} alignItems="center">
        {props.itemEditIndex === props.itemIndex ? (
          <>
            <Grid item xs={12} md={6}>
              <TextField
                size="small"
                value={props.newItemData.name || props.item.name}
                onChange={(e) => props.handleUpdateNewItemData('name', e.target.value)}
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                size="small"
                value={props.newItemData.link || props.item.link}
                onChange={(e) => props.handleUpdateNewItemData('link', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={1}>
              {saving ? (
                <CircularProgress size={24} />
              ) : (
                <IconButton onClick={() => handleSaveItem(props.groupId, props.item.id)} disabled={saving}>
                  <Check />
                </IconButton>
              )}
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6}>
              <Typography>{props.item.name}</Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography>{props.item.link}</Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <IconButton size="small" onClick={() => handleItemEdit(props.itemIndex)}>
                <Edit />
              </IconButton>
              <IconButton size="small" onClick={() => handleDeleteInviteLink(props.item.id)}>
                <Delete />
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}

function useInviteLinkPickerLogic(props: InviteLinkPickerProps) {
  const [searchText, setSearchText] = useState<string>('');

  const filteredGroups = props.groups.filter(group => {
    const groupMatches = group.name.toLowerCase().includes(searchText.toLowerCase());
    const itemMatches = group.items.some(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.link.toLowerCase().includes(searchText.toLowerCase())
    );
    return groupMatches || itemMatches;
  });

  const handleAddInviteLink = async (groupId: number) => {
    await props.handleCreateInviteLink('https://', 'Название ссылки', groupId);
  };

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return {
    handleAddInviteLink,
    handleSearchTextChange,
    searchText,
    filteredGroups
  };
}

function useGroupComponentLogic(props: GroupComponentProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [groupEditMode, setGroupEditMode] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>(props.group.name);
  const [itemEditIndex, setItemEditIndex] = useState<number | null>(null);
  const [newItemData, setNewItemData] = useState<{ name: string; link: string }>({ name: '', link: '' });
  const [saving, setSaving] = useState<boolean>(false);

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleUpdateNewItemData = (field: 'name' | 'link', value: string) => {
    setNewItemData({ ...newItemData, [field]: value });
  };

  const handleSaveItem = async (groupId: number, itemId: number) => {
    const name = newItemData.name || props.group.items.find(item => item.id === itemId)?.name || '';
    const link = newItemData.link || props.group.items.find(item => item.id === itemId)?.link || '';
    setSaving(true);
    await props.handleUpdateInviteLink(itemId, link, name);
    setSaving(false);
    setItemEditIndex(null);
  };

  const handleAccordionChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const handleSaveGroupName = async () => {
    setSaving(true);
    await props.handleUpdateGroupName(props.group.id, groupName);
    setSaving(false);
    setGroupEditMode(false);
  };

  const handleAddInviteLink = async () => {
    await props.handleAddInviteLink(props.group.id);
    setItemEditIndex(props.group.items.length); // Activate edit mode for the new link
    setNewItemData({ name: 'Новая ссылка', link: 'https://' });
  };

  return {
    groupEditMode,
    groupName,
    handleGroupNameChange,
    setGroupEditMode,
    itemEditIndex,
    setItemEditIndex,
    newItemData,
    handleUpdateNewItemData,
    handleSaveItem,
    expanded,
    handleAccordionChange,
    saving,
    handleSaveGroupName,
    handleAddInviteLink
  };
}

function useItemComponentLogic(props: ItemComponentProps) {
  const [saving, setSaving] = useState<boolean>(false);

  const handleItemEdit = (itemIndex: number) => {
    props.setItemEditIndex(itemIndex);
    props.handleUpdateNewItemData('name', props.item.name);
    props.handleUpdateNewItemData('link', props.item.link);
  };

  const handleDeleteInviteLink = async (linkId: number) => {
    await props.handleDeleteInviteLink(linkId);
  };

  const handleSaveItem = async (groupId: number, itemId: number) => {
    const name = props.newItemData.name || props.item.name;
    const link = props.newItemData.link || props.item.link;
    setSaving(true);
    await props.handleUpdateInviteLink(itemId, link, name);
    setSaving(false);
    props.setItemEditIndex(null);
  };

  return {
    handleItemEdit,
    handleDeleteInviteLink,
    handleSaveItem,
    saving
  };
}
