import { Axios, AxiosResponse } from "axios";
import { $authHost } from "./settings";

interface IUser {
  id: number;
  username: string;
  email: string;
}

export const profileRequests = {
  get: () => {
    return $authHost.get("/profile");
  },
  post: (profile: IUser): Promise<AxiosResponse> => {
    return $authHost.put("/profile", profile);
  },
  put: (profile: IUser): Promise<AxiosResponse> => {
    return $authHost.put("/profile", profile);
  },
  delete: (): Promise<AxiosResponse> => {
    return $authHost.delete("/profile");
  },
};
