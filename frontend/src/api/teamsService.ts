import { ITeam } from "../models/team-model";
import { $authHost } from "./index/settings";

const teamService = {
  getTeams: async (): Promise<ITeam[]> => {
    const response = await $authHost.get<ITeam[]>("/teams");
    return response.data;
  },

  getTeam: async (id: number): Promise<ITeam> => {
    const response = await $authHost.get<ITeam>(`/teams/${id}`);
    return response.data;
  },

  createTeam: async (teamData: ITeam): Promise<ITeam> => {
    const response = await $authHost.post<ITeam>("/teams", teamData);
    return response.data;
  },

  updateTeam: async (id: number, teamData: ITeam): Promise<ITeam> => {
    const response = await $authHost.put<ITeam>(`/teams/${id}`, teamData);
    return response.data;
  },

  deleteTeam: async (id: number): Promise<void> => {
    await $authHost.delete(`/teams/${id}`);
  },
};

export default teamService;
