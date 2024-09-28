// Интерфейс ответа от сервера при авторизации
export interface IAuthServerResponse {
  token: string;
}

// Интерфейс пользователя
export interface IUser {
  email: string;
  password: string;
}

// Интерфейс запроса для аутентификации
export interface AuthRequestI extends IUser {
  username: string;
}

// Интерфейс состояния аутентификации
export interface AuthStateI {
  loading: boolean;
  email: string;
  userName: string;
  isAuth: boolean;
  token: string;
}

// Интерфейс данных, полученных из JWT
export interface JwtData {
  email: string;
  userName: string;
  token: string;
}



