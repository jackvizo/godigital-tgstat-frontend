import React, { useState } from "react";
import { Typography, Box, Button, Card, Modal, TextFieldProps, IconButton, Stack, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";

export type ModalTextareaProps = {
  width?: string;
  open: boolean;
  label?: string;
  textArea?: TextFieldProps;
  hintList?: string[][];
  handleClose: () => void;
  handleTextareaValue: (value: string) => {};
};

export const ModalTextarea = (props: ModalTextareaProps) => {
  const [open, setOpen] = useState(props.open);
  const handleClose = () => setOpen(false);

  const [textareaValue, setTextareaValue] = useState("");

  return (
    <Modal open={open} onClose={props.handleClose || handleClose} sx={{ p: 4 }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
        }}
      >
        <Card
          sx={{
            m: 4,
            p: 3,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">{props.label}</Typography>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Box>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <ul>
                {props.hintList?.map((line) => (
                  <li key={line.join("")}>
                    {line.length > 1 ? line.map((str) => <Typography key={str}>{str}</Typography>) : line[0]}
                  </li>
                ))}
              </ul>
              <Box sx={{ width: "100%" }}>
                <TextField
                  {...props.textArea}
                  multiline
                  fullWidth
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                />
              </Box>
              <Stack direction="row" sx={{ justifyContent: "flex-end", mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={() => {
                    props.handleTextareaValue(textareaValue);
                  }}
                >
                  Добавить
                </Button>
              </Stack>
            </form>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
};
