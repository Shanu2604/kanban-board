import React from "react";
import TaskCard from "./TaskCard";
import { useDispatch } from "react-redux";
import { updateTaskStage } from "../redux/tasksSlice";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const Column = ({ stage, tasks }) => {
  const dispatch = useDispatch();
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TASK,
    drop: (item) => dispatch(updateTaskStage({ id: item.id, stage })),
  }));
  return (
    <div ref={drop} className="column">
      <h2>{stage}</h2>
      {tasks
        .filter((task) => task.stage === stage)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </div>
  );
};
export default Column;
