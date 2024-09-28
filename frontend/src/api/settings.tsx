import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import Cookies from "js-cookie";


const BASE_URL = "http://localhost:8080";


export const $authHost = axios.create({
  baseURL: BASE_URL
});

interface IAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const $host = axios.create({
  baseURL: BASE_URL,
});

const authInterceptor = (config: IAxiosRequestConfig): IAxiosRequestConfig => {
  config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
  return config;
};

const responseInterceptor = (response: AxiosResponse<string, unknown>) => {
  return response;
};

$authHost.interceptors.request.use(authInterceptor);
$authHost.interceptors.response.use(responseInterceptor);
$host.interceptors.response.use(responseInterceptor);