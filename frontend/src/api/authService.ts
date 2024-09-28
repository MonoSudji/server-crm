import { $authHost } from "./index/settings";
import { IAuthServerResponse, IUser, AuthRequestI } from "../models/user-model";
import { AxiosResponse } from "axios";

export const authService = {
  registration: async (data: AuthRequestI): Promise<IAuthServerResponse> => {
    const res: AxiosResponse<IAuthServerResponse> = await $authHost.post("auth/register", data);
    return res.data;
  },
  login: async (data: IUser): Promise<IAuthServerResponse> => {
    const res: AxiosResponse<IAuthServerResponse> = await $authHost.post("auth/login", data);
    return res.data;
  }
};
