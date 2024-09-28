import { createSlice } from '@reduxjs/toolkit'
import { authService } from "../../../api/authService"
import { AuthRequestI } from '../../../api/authService';
import { jwtDecode } from "jwt-decode";

interface AuthStateI {
    loading: boolean;
    email: string;
    userName: string;
    isAuth: boolean;
    token: string;
}

interface JwtData {
    email: string;
    userName: string;
    token: string;
}

const AuthState: AuthStateI = {
    loading: false,
    email: "",
    userName: "",
    isAuth: false,
    token: "",
}

const authSlice = createSlice({
    name: 'auth',
    initialState: AuthState,
    reducers: (create) => ({
        registration: create.asyncThunk<JwtData, AuthRequestI, { rejectValue: string}>(
            async (data, {rejectWithValue}) => {
                try {
                    const token : string = await authService.registration(data);
                    const newData: JwtData = jwtDecode(token);
                    return {...newData, token};
                } catch {
                    return rejectWithValue("Ошибка регистрации")
                }   
            },
            {
                pending: (state) => {
                    state.loading = true;
                },
                fulfilled: (state, action) => {
                    state.loading = false;
                    const {email, userName, token} = action.payload;
                    state.email = email;
                    state.userName = userName;
                    state.token = token;
                    // .....
                },
                rejected: (state, action) => {
                    state.loading = false;
                    // выводим ошибку
                    console.log(action.payload);
                },
            }
        ),
        login: create.asyncThunk<JwtData, AuthRequestI, { rejectValue: string}>(
            async (data, {rejectWithValue}) => {
                try {
                    const token : string = await authService.login(data);
                    const newData: JwtData = jwtDecode(token);
                    return {...newData, token};
                } catch {
                    return rejectWithValue("Ошибка регистрации")
                }   
            },
            {
                pending: (state) => {
                    state.loading = true;
                },
                fulfilled: (state, action) => {
                    state.loading = false;
                    const {email, userName, token} = action.payload;
                    state.email = email;
                    state.userName = userName;
                    state.token = token;
                },
                rejected: (state, action) => {
                    state.loading = false;
                    // выводим ошибку
                    console.log(action.payload);
                },
            }
        ),
    }),
})

// export const { } = authSlice.actions
export default authSlice.reducer;