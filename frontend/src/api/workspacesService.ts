import { IWorkspace } from "../models/workspace-model";
import { $authHost } from "./index/settings";

const workspaceService = {
  getWorkspaces: async (): Promise<IWorkspace[]> => {
    const response = await $authHost.get<IWorkspace[]>("/project");
    return response.data;
  },

  getWorkspace: async (id: number): Promise<IWorkspace> => {
    const response = await $authHost.get<IWorkspace>(`/project/${id}`);
    return response.data;
  },

  createWorkspace: async (workspaceData: IWorkspace): Promise<IWorkspace> => {
    const response = await $authHost.post<IWorkspace>(
      "/project",
      workspaceData
    );
    return response.data;
  },

  updateWorkspace: async (
    id: number,
    workspaceData: IWorkspace
  ): Promise<IWorkspace> => {
    const response = await $authHost.put<IWorkspace>(
      `/project/${id}`,
      workspaceData
    );

    return response.data;
  },

  deleteWorkspace: async (id: number): Promise<IWorkspace> => {
    const response = await $authHost.delete<IWorkspace>(`/project/${id}`);
    return response.data;
  },
};

export default workspaceService;
