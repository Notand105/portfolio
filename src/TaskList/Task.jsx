import React, { useContext } from "react";
import Context from "./Context";
import "./Styles/styles.css";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { ACTIONS, PRIORITY } from "./Utils";

const Task = ({ data }) => {
  const context = useContext(Context);

  const handleDelete = () => {
    context.Delete(data);
  };
  const handleComplete = () => {
    context.Toggle(data);
  };

  return (
    <div className="task">
      <h4
        style={{
          color: data.complete ? "gray" : "black",
          textDecoration: data.complete ? "line-through" : "none",
        }}
      >
        {data.name}
      </h4>
      <div
        className="priority"
        style={{
          backgroundColor:
            data.priority !== PRIORITY.NORMAL
              ? data.priority === PRIORITY.HIGH
                ? "orange" 
                : "red"
              : "green",
          padding:'10px',
          borderRadius: '10px',
          color: 'white',
        }}
      >
        {data.priority}{" "}
      </div>
      <i onClick={handleComplete}>
        <CheckBoxOutlinedIcon className="icon" style={{ color: "green" }} />
      </i>
      <i onClick={handleDelete}>
        <DeleteForeverOutlinedIcon className="icon" style={{ color: "red" }} />
      </i>
    </div>
  );
};

export default Task;
