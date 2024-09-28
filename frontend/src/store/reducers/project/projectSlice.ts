import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { IWorkspace } from "../../../models/workspace-model";
import workspaceService from "../../../api/workspacesService";

export interface projectState {
  project: IWorkspace[];
  isLoading: boolean;
  error: string;
}

const initialState: projectState = {
  project: [] as IWorkspace[],
  isLoading: false,
  error: "",
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const projectSlice = createSliceWithThunks({
  name: "project-slice",
  initialState,
  reducers: (create) => ({
    getAllProject: create.asyncThunk<
      IWorkspace[],
      void,
      { rejectValue: string }
    >(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await workspaceService.getWorkspaces();
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
        fulfilled: (state, { payload }) => {
          state.project = payload;
          state.isLoading = false;
        },
        rejected: (state) => {
          state.isLoading = false;
          state.error = "Не удалось получить все проекты!";
        },
      }
    ),
  }),
});

export const projectAction = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
