import { IBoard } from "../models/board-model";
import { $authHost } from "./index/settings";

const boardsService = {
  getBoards: async (): Promise<IBoard[]> => {
    const response = await $authHost.get<IBoard[]>(`/board`);
    return response.data;
  },

  getBoard: async (id: number): Promise<IBoard> => {
    const response = await $authHost.get<IBoard>(`/board/${id}`);
    return response.data;
  },

  createBoard: async (boardData: IBoard): Promise<IBoard> => {
    const response = await $authHost.post<IBoard>("/board", boardData);
    return response.data;
  },

  updateBoard: async (id: number, boardData: IBoard): Promise<IBoard> => {
    const response = await $authHost.put<IBoard>(`/board/${id}`, boardData);
    return response.data;
  },

  deleteBoard: async (id: number): Promise<void> => {
    await $authHost.delete(`/board/${id}`);
  },
};

export default boardsService;
