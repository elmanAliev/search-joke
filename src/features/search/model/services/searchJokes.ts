import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Joke } from "../../../../entities/Joke";

interface Data {
  result: Joke[];
}

export const searchJokes = createAsyncThunk<any, string>(
  "search/searchJokes",
  async (searchText, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios.get<Data>(
        `https://api.chucknorris.io/jokes/search?query=${searchText}`
      );

      if (!response.data) {
        throw new Error();
      }

      return response.data.result;
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);
