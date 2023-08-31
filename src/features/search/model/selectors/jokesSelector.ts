import { StateSchema } from "../../../../app/providers/storeProvider/config/StateSchema";

export const jokesIsLoadingSelector = (state: StateSchema) =>
  state.jokes.isLoading;
export const jokesErrorSelector = (state: StateSchema) => state.jokes.error;
export const jokesListSelector = (state: StateSchema) => state.jokes.list;
export const jokesInitedSelector = (state: StateSchema) => state.jokes.inited;
