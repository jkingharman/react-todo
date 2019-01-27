import React from "react";
import Create from "@material-ui/icons/Create.js";

const ModalButton = ({ onClick }) => {
  return <Create id="create-btn" onClick={onClick} />;
};

export default ModalButton;
