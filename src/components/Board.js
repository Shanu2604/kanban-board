import React from "react";
import Column from "./Column";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";
import { setSearchQuery } from "../redux/tasksSlice";

const Board = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="searchAndAdd">
        <SearchBar
          searchInput={searchQuery}
          onSearch={(text) => dispatch(setSearchQuery(text))}
        />
        <TaskForm />
      </div>
      <div className="board">
        {["To Do", "In Progress", "Peer Review", "Done"].map((stage) => (
          <Column key={stage} stage={stage} tasks={filteredTasks} />
        ))}
      </div>
    </>
  );
};
export default Board;
