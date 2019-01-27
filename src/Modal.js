import React from "react";
import Close from "@material-ui/icons/Close.js";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className="Modal"
      overlayclassname="Overlay"
      style={{ display: isOpen ? "block" : "none" }}
    >
      {children}
      <Close onClick={onClose} />
    </div>
  );
};

export default Modal;
