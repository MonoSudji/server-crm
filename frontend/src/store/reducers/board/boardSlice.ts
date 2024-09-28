import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import boardsService from "../../../api/boardsService";
import { IBoard } from "../../../models/board-model";

interface BoardState {
  board: IBoard;
  boards: IBoard[];
  isLoading: boolean;
  error: string;
}

const initialState: BoardState = {
  board: {} as IBoard,
  boards: [] as IBoard[],
  isLoading: false,
  error: "",
};

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const boardSlice = createSliceWithThunks({
  name: "board-slice",
  initialState,
  reducers: (create) => ({
    getBoardById: create.asyncThunk<IBoard, number, { rejectValue: string }>(
      async (requestParams, { rejectWithValue }) => {
        try {
          const { data } = await boardsService.getBoard(requestParams);
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
          state.board = payload;
          state.isLoading = false;
        },
        rejected: (state) => {
          state.error = "Не удалось получить актуальную карточку";
        },
      }
    ),
    createBoard: create.asyncThunk<
      IBoard,
      { name: string; description: string; project_id: number },
      { rejectValue: string }
    >(
      async (requestBody, { rejectWithValue }) => {
        try {
          const { data } = await boardsService.createBoard(requestBody);
          console.log(data);
          return data;
        } catch (err) {
          return rejectWithValue(`${err}`);
        }
      },
      {
        pending: (state) => {
          state.isLoading = true;
        },
      }
    ),
    getAllBoard: create.asyncThunk(
      async (_, { rejectWithValue }) => {
        try {
          const { data } = await boardsService.getBoards();
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
          state.boards = payload;
          state.isLoading = false;
        },
        rejected: (state) => {
          state.error = "Не удалось получить карточки!";
          state.isLoading = false;
        },
      }
    ),
  }),
});

export const boardAction = boardSlice.actions;
export const boardReducer = boardSlice.reducer;
