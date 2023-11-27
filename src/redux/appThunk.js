import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3010";

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async ({ title }) => {
    const response = await axios.post(
      `${URL}/todos`,
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.todo;
  }
);

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get(`${URL}/todos`);

  return response.data.todos;
});

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone",
  async ({ todoId }) => {
    const response = await axios.put(`${URL}/todos/${todoId}/done`);
    return response.status;
  }
);

export const updateTodo = createAsyncThunk(
  "appSlice/updateTodo",
  async ({ todoId, title }) => {
    const response = await axios.put(
      `${URL}/todos/${todoId}`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data.todo;
  }
);

export const deleteTodo = createAsyncThunk(
  "appSlide/deleteTodo",
  async ({ todoId }) => {
    const response = await axios.delete(`${URL}/todos/${todoId}`);
    return response.status;
  }
);
