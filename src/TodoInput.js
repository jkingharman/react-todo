import React from "react";
import Add from "@material-ui/icons/Add.js";

const TodoInput = ({
  note,
  title,
  handleNoteChange,
  handleTitleChange,
  handleAdd,
  validationFail
}) => {
  return (
    <div>
      <input
        id="note-input"
        placeholder="Todo note"
        value={note}
        onChange={handleNoteChange}
      />
      <input
        id="title-input"
        placeholder="Todo title"
        value={title}
        onChange={handleTitleChange}
      />
      <div
        className="Flash"
        style={{ display: validationFail ? "block" : "none" }}
      >
        Input can't be blank!
      </div>
      <Add
        style={{ display: !validationFail ? "inline" : "none" }}
        onClick={handleAdd}
      />
    </div>
  );
};

export default TodoInput;
