import React, { useState, useEffect } from "react";
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
  Checkbox,
  Tooltip, Modal, Card,
} from "@mui/material";
import {
  ExpandMore,
  Edit,
  Add,
  Delete,
  Check,
  PlaylistAdd, Close,
} from "@mui/icons-material";

import { ModalTextarea } from "../ModalTextarea/ModalTextarea";

export interface Item {
  id: number;
  name: string;
  link: string;
  enabled: boolean;
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
  handleCreateInviteLink: (
    inviteLink: string,
    label: string,
    groupId: number
  ) => Promise<void>;
  handleCreateInviteLinksByList: (
    inviteLinkList: { inviteLink: string, label: string }[],
    groupId: number
  ) => Promise<void>;
  handleUpdateInviteLink: (
    linkId: number,
    inviteLink: string,
    label: string,
    enabled: boolean
  ) => Promise<void>;
  handleDeleteInviteLink: (linkId: number) => Promise<void>;
  handleToggleInviteLinkGroup: (
    inviteLinkGroupPk: number,
    enabled: boolean
  ) => Promise<void>;
}

export function InviteLinkPicker(props: InviteLinkPickerProps) {
  const { handleSearchTextChange, searchText, filteredGroups } =
    useInviteLinkPickerLogic(props);

  return (
    <Box>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
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
        sx={{ mb: 2 }}
        onClick={() => props.handleCreateGroup("Новая группа ссылок")}
      >
        Добавить группу ссылок
      </Button>

      {filteredGroups.map((group, groupIndex) => (
        <GroupComponent
          key={group.id}
          group={group}
          handleUpdateGroupName={props.handleUpdateGroupName}
          handleDeleteGroup={props.handleDeleteGroup}
          handleCreateInviteLink={props.handleCreateInviteLink}
          handleCreateInviteLinksByList={props.handleCreateInviteLinksByList}
          handleUpdateInviteLink={props.handleUpdateInviteLink}
          handleDeleteInviteLink={props.handleDeleteInviteLink}
          handleToggleInviteLinkGroup={props.handleToggleInviteLinkGroup}
        />
      ))}
    </Box>
  );
}

interface GroupComponentProps {
  group: Group;
  handleUpdateGroupName: (groupId: number, groupName: string) => Promise<void>;
  handleDeleteGroup: (groupId: number) => Promise<void>;
  handleCreateInviteLink: (
    inviteLink: string,
    label: string,
    groupId: number
  ) => Promise<void>;
  handleCreateInviteLinksByList: (
    inviteLinkList: { inviteLink: string, label: string }[],
    groupId: number
  ) => Promise<void>;
  handleUpdateInviteLink: (
    linkId: number,
    inviteLink: string,
    label: string,
    enabled: boolean
  ) => Promise<void>;
  handleDeleteInviteLink: (linkId: number) => Promise<void>;
  handleToggleInviteLinkGroup: (
    inviteLinkGroupPk: number,
    enabled: boolean
  ) => Promise<void>;
}

function GroupComponent(props: GroupComponentProps) {
  const { group } = props;
  const [groupEditMode, setGroupEditMode] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>(group.name);
  const [expanded, setExpanded] = useState<boolean>(false);

  const [isMultilinkModalVisible, setIsMultilinkModalVisible] = useState<boolean>(false);
  const modalTextareaOpen = () => setIsMultilinkModalVisible(true);
  const modalTextareaClose = () => setIsMultilinkModalVisible(false);

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleSaveGroupName = async () => {
    await props.handleUpdateGroupName(group.id, groupName);
    setGroupEditMode(false);
  };

  const handleAccordionChange = (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded);
  };

  const handleGroupCheckChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enabled = event.target.checked;
    await props.handleToggleInviteLinkGroup(group.id, enabled);
  };

  const groupCheckState = group.items.every((item) => item.enabled)
    ? "checked"
    : group.items.some((item) => item.enabled)
    ? "indeterminate"
    : "unchecked";

  const linkToObject = (rawLink: string) => {
    const protocol = "https://";
    let label = "";
    let link = rawLink.toLowerCase().replace(protocol, "");

    if (link.includes(":")) {
      let linkItems = link.split(":");
      label = linkItems[0].trim()
      link = protocol + linkItems[1].trim();
    } else {
      label = link.trim();
      link = protocol + link;
    }
    return { label: label, inviteLink: link.replaceAll(" ", "") }
  }

  const handleTextarea = async (value: string) => {
    const linkList = value.split("\n")
      .filter((link) => link.trim().length > 0 )       // фильтр пустых строк
      .map(linkToObject)                                     // преобразование строки в ссылку и её название

    //console.log(linksList);
    await props.handleCreateInviteLinksByList(linkList, props.group.id);
    modalTextareaClose();
  };

  return (
      <>
        {
          isMultilinkModalVisible ?
           <ModalTextarea open={isMultilinkModalVisible}
                          handleClose={modalTextareaClose}
                          width="65%"
                          label="Введите ссылки и их описание в формате:"
                          info={[
                            { num: 1, text: ["Название ссылки: https://t.me/+z6MHzt9YkNRmNDIy"] },
                            { num: 2, text: ["Ссылку можно вводить без названия"] },
                            { num: 3, text: ["Каждая ссылка должна начинаться с новой строки"] },
                            { num: 4, text: ["Пример:",
                                "Название ссылки 1: https://t.me/+111111",
                                "Название ссылки 2: https://t.me/+22222",
                                "https://t.me/+333333",
                                "https://t.me/+444444",
                                //"t.me/+555555",
                              ]
                            },
                          ]}
                          textArea={{
                            name: "linksList",
                            placeholder: "Введите ссылки...",
                            minRows: 4,
                            cols: 65,
                            autofocus: true,
                          }}
                          handleTextareaValue={handleTextarea}
           /> : null
        }

        <Accordion expanded={expanded} onChange={handleAccordionChange}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            onClick={(event) => {
              if (groupEditMode) {
                event.stopPropagation();
              }
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <Box
                sx={{
                  alignItems: "center",
                  flexDirection: "row",
                  display: "flex",
                  gap: 2,
                }}
              >
                <Checkbox
                  checked={groupCheckState === "checked"}
                  indeterminate={groupCheckState === "indeterminate"}
                  onChange={(event) => {
                    event.stopPropagation();
                    handleGroupCheckChange(event);
                  }}
                  onClick={(event) => event.stopPropagation()}
                />
                {groupEditMode ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <TextField
                      size="small"
                      value={groupName}
                      onChange={handleGroupNameChange}
                      autoFocus
                      sx={{ mr: 1 }}
                    />
                    <IconButton onClick={handleSaveGroupName}>
                      <Check />
                    </IconButton>
                  </Box>
                ) : (
                  <Typography>{group.name}</Typography>
                )}
              </Box>

              {!groupEditMode && (
                <IconButton
                  size="small"
                  onClick={(event) => {
                    event.stopPropagation();
                    setGroupEditMode(true);
                  }}
                >
                  <Edit />
                </IconButton>
              )}
            </Box>
          </AccordionSummary>
        <AccordionDetails>
          {group.items.map((item, itemIndex) => (
            <ItemComponent
              key={item.id}
              item={item}
              groupId={group.id}
              handleUpdateInviteLink={props.handleUpdateInviteLink}
              handleDeleteInviteLink={props.handleDeleteInviteLink}
            />
          ))}
          <Divider />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <IconButton
                size="small"
                onClick={() =>
                  props.handleCreateInviteLink(
                    "https://",
                    "Новая ссылка",
                    group.id
                  )
                }
              >
                <Add />
              </IconButton>

              <Tooltip title="Добавить ссылки списком">
                <IconButton onClick={() => { modalTextareaOpen() }}>
                  <PlaylistAdd />
                </IconButton>
              </Tooltip>

            </Stack>
            <IconButton
              size="small"
              onClick={() => props.handleDeleteGroup(group.id)}
            >
              <Delete />
            </IconButton>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

interface ItemComponentProps {
  item: Item;
  groupId: number;
  handleUpdateInviteLink: (
    linkId: number,
    inviteLink: string,
    label: string,
    enabled: boolean
  ) => Promise<void>;
  handleDeleteInviteLink: (linkId: number) => void;
}

function ItemComponent(props: ItemComponentProps) {
  const { item, groupId, handleUpdateInviteLink, handleDeleteInviteLink } =
    props;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newItemData, setNewItemData] = useState<{
    name: string;
    link: string;
  }>({ name: item.name, link: item.link });
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (editMode) {
      setNewItemData({ name: item.name, link: item.link });
    }
  }, [editMode, item.name, item.link]);

  const handleSaveItem = async () => {
    setSaving(true);
    await handleUpdateInviteLink(
      item.id,
      newItemData.link,
      newItemData.name,
      item.enabled
    );
    setSaving(false);
    setEditMode(false);
  };

  const handleCheckChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const enabled = event.target.checked;
    await handleUpdateInviteLink(item.id, item.link, item.name, enabled);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={1}
    >
      <Grid container spacing={1} alignItems="center">
        {editMode ? (
          <>
            <Grid item xs={1}>
              <Checkbox checked={item.enabled} onChange={handleCheckChange} />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                size="small"
                value={newItemData.name}
                onChange={(e) =>
                  setNewItemData({ ...newItemData, name: e.target.value })
                }
                autoFocus
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextField
                size="small"
                value={newItemData.link}
                onChange={(e) =>
                  setNewItemData({ ...newItemData, link: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={1}>
              {saving ? (
                <CircularProgress size={24} />
              ) : (
                <IconButton onClick={handleSaveItem} disabled={saving}>
                  <Check />
                </IconButton>
              )}
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={1}>
              <Checkbox checked={item.enabled} onChange={handleCheckChange} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography>{item.name}</Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography>{item.link}</Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <IconButton size="small" onClick={() => setEditMode(true)}>
                <Edit />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleDeleteInviteLink(item.id)}
              >
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
  const [searchText, setSearchText] = useState<string>("");

  const filteredGroups = props.groups.filter((group) => {
    const groupMatches = group.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const itemMatches = group.items.some(
      (item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.link.toLowerCase().includes(searchText.toLowerCase())
    );
    return groupMatches || itemMatches;
  });

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return {
    handleSearchTextChange,
    searchText,
    filteredGroups,
  };
}
