import React from "react";
import Button from "./Button";
import classes from "../styles/FormModal.module.css";
import Card from "./Card";

const FormModal: React.FC<Props> = ({
  children,
  btnText,
  onClick,
  btnclass,
  modalclass,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const submitHanlder = () => {
    onClick();
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} className={btnclass}>
        {btnText}
      </Button>
      {open && <div className={classes.backdrop} />}
      {open && (
        <Card className={`${classes.modal} ${modalclass}`}>
          {children}
          <div className={classes.btn}>
            <div style={{ marginRight: "8px" }}>
              <Button className={btnclass} onClick={handleClose}>
                Cancel
              </Button>
            </div>
           { onClick &&<Button className={btnclass} onClick={submitHanlder}>
              Submit
            </Button>}
          </div>
        </Card>
      )}
    </div>
  );
};

interface Props {
  children: JSX.Element;
  className?: string;
  btnclass?: string;
  modalclass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnText: string;
}

export default FormModal;
