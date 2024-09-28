import { ITeamMember } from "../models/team-member-model";
import { $authHost } from "./index/settings";

const teamMembersService = {
  getTeamMembers: async (): Promise<ITeamMember[]> => {
    const response = await $authHost.get<ITeamMember[]>(`/team-members`);
    return response.data;
  },

  getTeamMember: async (id: number): Promise<ITeamMember> => {
    const response = await $authHost.get<ITeamMember>(`/team-members/${id}`);
    return response.data;
  },

  createTeamMember: async (
    teamMemberData: ITeamMember
  ): Promise<ITeamMember> => {
    const response = await $authHost.post<ITeamMember>(
      "/team-members",
      teamMemberData
    );
    return response.data;
  },

  updateTeamMember: async (
    id: number,
    teamMemberData: ITeamMember
  ): Promise<ITeamMember> => {
    const response = await $authHost.put<ITeamMember>(
      `/team-members/${id}`,
      teamMemberData
    );
    return response.data;
  },

  deleteTeamMember: async (id: number): Promise<void> => {
    await $authHost.delete(`/team-members/${id}`);
  },
};

export default teamMembersService;
