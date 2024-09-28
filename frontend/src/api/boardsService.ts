import { IBoard } from "../models/board-model";
import { $authHost, $host } from "./index/settings";
import { AxiosResponse } from "axios";

const boardsService = {
  getBoards: async (): Promise<AxiosResponse<IBoard[]>> => {
    const response = await $host.get<IBoard[]>(`/api/board`);
    return response;
  },

  getBoard: async (id: number): Promise<AxiosResponse<IBoard>> => {
    const response = await $host.get<IBoard>(`/api/board/${id}`);
    return response;
  },

  createBoard: async (boardData: IBoard): Promise<AxiosResponse<IBoard>> => {
    const response = await $host.post<IBoard>("/api/board", boardData);
    return response;
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
