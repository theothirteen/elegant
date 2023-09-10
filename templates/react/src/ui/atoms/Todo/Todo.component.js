import React from "react";
import PropTypes from "prop-types";
import NativeInput from "../NativeInput/NativeInput.component";
import IconButton from "../IconButton/IconButton.component";

const Todo = ({ onToggleClick, completed, text, id, onEditClick, onDeleteClick  }) => (
  <li
    style={{
      textDecoration: completed ? "line-through" : "none",
      verticalAlign: "middle",
      clear: 'both',
    }}
  >
    <label htmlFor={`checkbox${id}`}>
      <NativeInput
        id={`checkbox${id}`}
        onClick={onToggleClick}
        name="checkbox"
        style={{ marginRight: "1rem", verticalAlign: "middle" }}
        type="checkbox"
        onChange={(e) => e.target.value}
        checked={completed}
      />
      {text}
      <span style={{ float: "right" }}>
        <IconButton variant="clear" alt="edit" iconName="edit" size="16" onClick={onEditClick} />
        <IconButton variant="clear" alt="remove" iconName="trash-2" size="16" onClick={onDeleteClick} />
      </span>
    </label>
  </li>
);

Todo.propTypes = {
  onToggleClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
