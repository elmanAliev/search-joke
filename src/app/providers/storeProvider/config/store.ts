import { configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { jokesReducer } from "../../../../features/search";

export function createReduxStore() {
  return configureStore<StateSchema>({
    reducer: {
      jokes: jokesReducer,
    },
    devTools: true,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
