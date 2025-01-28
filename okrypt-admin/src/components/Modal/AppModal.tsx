import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { COLORS } from "../../constants/theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: { xs: "translate(-50%, -50%)", md: "translate(-25%, -50%)" },
  bgcolor: COLORS.bottomTabBackground,
  boxShadow: 24,
  p: 2,
  maxWidth: "500px",
  width: "100%",
  borderRadius: "10px",
};

export default function AppModal({
  children,
  open,
  handleClose,
}: {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}) {
  return (
    <div style={{}}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
