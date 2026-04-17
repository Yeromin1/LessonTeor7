import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import "../services/api";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "https://cute-todo-api-rwtq.onrender.com/users/register",
        credentials,
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "https://cute-todo-api-rwtq.onrender.com/users/login",
        credentials,
      );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
