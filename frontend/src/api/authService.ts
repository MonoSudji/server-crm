import { $authHost } from "./index/settings"

interface IAuthRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export const authRequest = {
  registration: async (data: IAuthRequest) => {
    const res = await $authHost.post("auth/register", data);
    return res.data;
  },
  login: async (data: IAuthRequest) => {
    const res = await $authHost.post("auth/login", data);
    return res.data;
  }
};
