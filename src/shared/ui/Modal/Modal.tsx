import { type PropsWithChildren } from "react";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import classes from "./Modal.module.scss";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const Modal = ({ open, onClose, children }: PropsWithChildren<ModalProps>) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        },
      }}
    >
      <Box className={classes.modalContainer}>{children}</Box>
    </MuiModal>
  );
};

export default Modal;
