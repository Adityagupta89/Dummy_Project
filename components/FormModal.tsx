import React from "react";
import Box from "@mui/material/Box";
import Button from "./Button";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";

const FormModal: React.FC<Props> = ({
  children,
  btnText,
  width,
  height,
  top,
  left,
  onClick,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const submitHanlder = () => {
    onClick();
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top,
    left,
    transform: "translate(-50%, -50%)",
    width,
    height,
    overflow: "scoll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "2rem",
      }}
    >
      <Button
        text={btnText}
        width="135px"
        height="45px"
        radius="5px"
        bcolor="rgb(27, 131, 179)"
        color="white"
        fontSize="20px"
        onClick={handleOpen}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
          <Stack
            flexDirection="row"
            justifyContent="center"
            style={{ width: "100%" }}
          >
            <Button
              text="Cancel"
              width="80px"
              height="45px"
              radius="5px"
              fontSize="16px"
              onClick={handleClose}
              bcolor="rgb(27, 131, 179)"
              color="white"
            />
            <Button
              text="Sumbit"
              width="80px"
              height="45px"
              radius="5px"
              onClick={submitHanlder}
              fontSize="16px"
              bcolor="rgb(27, 131, 179)"
              color="white"
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
export default FormModal;

interface Props {
  children: JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  btnText: string;
  width: string;
  height: string;
  left: string;
  top: string;
}
