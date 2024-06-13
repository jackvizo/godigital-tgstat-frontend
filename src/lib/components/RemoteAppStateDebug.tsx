"use client";

import { useDebugStore } from "@/lib/use-debug";
import { DataObject } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Fab from "@mui/material/Fab";
import { useState } from "react";

export function RemoteAppStateDebug() {
  const debug = useDebugStore((state) => state.data);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Fab
        size="medium"
        color="secondary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 80, right: 10 }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <DataObject />
      </Fab>
      <Drawer
        variant="persistent"
        anchor={"left"}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Box p={2} maxWidth={500} minWidth={500}>
          <pre style={{ fontSize: "11px" }}>{JSON.stringify(debug, null, 2)}</pre>
        </Box>
      </Drawer>
    </>
  );
}

export default RemoteAppStateDebug;
