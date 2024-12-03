import React, { useState } from "react";
import {Typography, Box, Button, Card, Modal, TextareaAutosize, IconButton, Stack} from "@mui/material";
import {Close} from "@mui/icons-material";

export type TextareaProps = {
  name?: string;
  minRows?: number;
  cols?: number;
  placeholder?: string;
  autofocus?: boolean;
};

export type TextareaInfo = {
  num: number;
  text: string[];
};

export type ModalTextareaProps = {
  width?: string;
  open: boolean;
  handleClose: () => void;
  label?: string;
  textArea?: TextareaProps;
  info?: TextareaInfo[];
  handleTextareaValue: (value: string) => {};
};

export const ModalTextarea = (props: ModalTextareaProps) => {
  const [open, setOpen] = useState(props.open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [textareaValue, setTextareaValue] = useState("")
  //const handleValue = () => setTextareaValue("");

  return (
      <Modal open={open} onClose={ props.handleClose || handleClose } sx={{ p: 4 }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: props.width || "100%",
          }}
        >
          <Card
            sx={{
              m: 4,
              p: 3,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">{props.label}</Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
            <Card>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                {
                  <ul>
                    {props.info?.map((line) =>
                        <li key={line.num}>
                          {
                            line.text.length > 1 ?
                                line.text.map(str => (<Typography key={str}>{str}</Typography>)) :
                                line.text
                          }
                        </li>
                    )}
                  </ul>
                }
                {
                  <div>
                    <TextareaAutosize
                        cols={props.textArea?.cols}
                        name={props.textArea?.name}
                        autoFocus={props.textArea?.autofocus}
                        minRows={props.textArea?.minRows}
                        placeholder={props.textArea?.placeholder}
                        value={textareaValue}
                        // update the state variable on any edits!
                        onChange={(e) => setTextareaValue(e.target.value)}
                    />
                  </div>
                }
                <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
                  <Button type="submit" variant="contained" sx={{ mb: 2, mt:2 }}
                          onClick={ () => { props.handleTextareaValue(textareaValue) }}
                  >
                    Добавить
                  </Button>
                </Stack>
              </form>
            </Card>
          </Card>
        </Box>
      </Modal>
  );
};
