import { $authHost } from "./index/settings"

export interface AuthRequestI {
  email: string;
  password: string;
}

export const authService = {
  registration: async (data: AuthRequestI) => {
    const res = await $authHost.post("auth/register", data);
    return res.data;
  },
  login: async (data: AuthRequestI) => {
    const res = await $authHost.post("auth/login", data);
    return res.data;
  }
};

