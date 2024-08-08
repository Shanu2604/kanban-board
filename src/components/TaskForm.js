import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
const TaskForm = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addTask({ id: uuidv4(), title, description, stage: "To Do" }));
      setTitle("");
      setDescription("");
      setShowEdit(false);
    } else {
      return alert("please add task details...");
    }
  };
  return (
    <div>
      {showEdit ? (
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      ) : (
        <Box
          className="box"
          onClick={() => setShowEdit(true)}
          sx={{ "& > :not(style)": { m: 1 } }}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>
      )}
    </div>
  );
};
export default TaskForm;
