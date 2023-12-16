import React from "react";
import { FaCross } from "react-icons/fa";
import { Alert, Snackbar, IconButton } from "@mui/material";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

export default function CustomSnackbar({
  open,
  setOpen,
  message,
  severity,
}: Props) {
  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton size="small" color="inherit" onClick={handleClose}>
        <FaCross />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    </div>
  );
}
