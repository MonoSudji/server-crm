import { ICard } from "../models/card-model";
import { $authHost } from "./index/settings";

const cardsService = {
  getCards: async (): Promise<ICard[]> => {
    const response = await $authHost.get<ICard[]>(`/cards`);
    return response.data;
  },

  getCard: async (id: number): Promise<ICard> => {
    const response = await $authHost.get<ICard>(`/cards/${id}`);
    return response.data;
  },

  createCard: async (cardData: ICard): Promise<ICard> => {
    const response = await $authHost.post<ICard>("/cards", cardData);
    return response.data;
  },

  updateCard: async (id: number, cardData: ICard): Promise<ICard> => {
    const response = await $authHost.put<ICard>(`/cards/${id}`, cardData);
    return response.data;
  },

  deleteCard: async (id: number): Promise<void> => {
    await $authHost.delete(`/cards/${id}`);
  },
};

export default cardsService;
