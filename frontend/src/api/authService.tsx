import { $authHost, $host } from "./settings"


interface IRegisterRequest {
    email: string
    password: string
    confirmPassword: string
}


interface ILoginRequest {
    email: string
    password: string
}


export const authRequest = {
    post: (url: string, data: IRegisterRequest | ILoginRequest) => {
        return $host.post(url, data);
    }
}
