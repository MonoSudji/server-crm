import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settings/settingsSlice.ts";
import { boardReducer } from "./reducers/board/boardSlice.ts";
import { projectReducer } from "./reducers/project/projectSlice.ts";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    boards: boardReducer,
    project: projectReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
