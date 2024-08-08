import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  searchQuery: "",
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStage: (state, action) => {
      const { id, stage } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.stage = stage;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const { addTask, updateTaskStage, setSearchQuery } = tasksSlice.actions;
export default tasksSlice.reducer;
