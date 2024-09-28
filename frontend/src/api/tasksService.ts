import { ITask } from "../models/task-model";
import { $authHost } from "./index/settings";

const tasksService = {
  getTasks: async (): Promise<ITask[]> => {
    const response = await $authHost.get<ITask[]>(`/tasks`);
    return response.data;
  },

  getTask: async (id: number): Promise<ITask> => {
    const response = await $authHost.get<ITask>(`/tasks/${id}`);
    return response.data;
  },

  createTask: async (taskData: ITask): Promise<ITask> => {
    const response = await $authHost.post<ITask>("/tasks", taskData);
    return response.data;
  },

  updateTask: async (id: number, taskData: ITask): Promise<ITask> => {
    const response = await $authHost.put<ITask>(`/tasks/${id}`, taskData);
    return response.data;
  },

  deleteTask: async (id: number): Promise<void> => {
    await $authHost.delete(`/tasks/${id}`);
  },
};

export default tasksService;
