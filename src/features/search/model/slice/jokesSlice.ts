import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Joke,
  JokesSchema,
} from "../../../../entities/Joke/model/types/jokesSchema";
import { searchJokes } from "../services/searchJokes";

const initialState: JokesSchema = {
  isLoading: false,
  error: false,
  list: [],
  inited: false,
};

export const jokesSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {
    resetJokes: (state) => {
      state.list = [];
      state.inited = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchJokes.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(
        searchJokes.fulfilled,
        (state, action: PayloadAction<Joke[]>) => {
          state.isLoading = false;
          state.inited = true;
          state.list = action.payload;
        }
      )
      .addCase(searchJokes.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { actions: jokesActions } = jokesSlice;
export const { reducer: jokesReducer } = jokesSlice;
