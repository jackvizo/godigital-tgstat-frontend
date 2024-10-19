import React, { useState } from "react";
import {Box, Button, Card, Divider, Modal} from "@mui/material";
import {
  Textarea,
  Typography,
  List,
  ListItem,
  ListItemDecorator,
} from "@mui/joy";

export type TextareaProps = {
  minRows?: number;
  placeholder?: string;
  variant?: "outlined" | "solid" | "soft" | "plain";
  size?: "sm" | "md" | "lg";
};

export type TextareaInfo = {
  num: number;
  text: string;
};

export type ModalTextareaProps = {
  title?: string;
  textArea?: TextareaProps;
  marker?: "disc" | "circle" | "decimal" | undefined;
  info?: TextareaInfo[];
};

export const ModalTextarea = (props: ModalTextareaProps) => {
  return (
    <Box>
      <Card variant="outlined">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Typography level="h3">
            Введите ссылки и их описание в формате:
          </Typography>
          <List marker={props?.marker}>
            {props.info?.map((line) => (
              <ListItem key={line.num}>
                <div>{line.text}</div>
              </ListItem>
            ))}
            ;
          </List>
          <Textarea
            size={props.textArea?.size}
            minRows={props.textArea?.minRows}
            placeholder={props.textArea?.placeholder}
            variant={props.textArea?.variant}
          />

          <Button variant="contained" sx={{ mb: 2 }} onClick={() => {}}>
            Добавить
          </Button>
        </form>
      </Card>
    </Box>
  );
};
