import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "resources/icons/cross.svg";

const CustomDialog = ({
  children,
  open = false,
  onClose,
  wrapperClasses = "",
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <div className={wrapperClasses}>
        <DialogTitle>
          <div
            className="w-full flex justify-end cursor-pointer"
            onClick={onClose}
          >
            <img className="w-5 h-5" src={CloseIcon} alt="close" />
          </div>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </div>
    </Dialog>
  );
};

export default CustomDialog;
