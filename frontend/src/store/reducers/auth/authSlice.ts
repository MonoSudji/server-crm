import { authService } from "../../../api/authService"
import { jwtDecode } from "jwt-decode";
import { JwtData, AuthStateI, AuthRequestI, IUser } from '../../../models/user-model';
import { asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

const AuthState: AuthStateI = {
    loading: false,
    email: "",
    userName: "",
    isAuth: false,
    token: "",
}

const authSlice = createSliceWithThunks({
    name: 'auth',
    initialState: AuthState,
    reducers: (create) => ({
        registration: create.asyncThunk<JwtData, AuthRequestI, { rejectValue: string}>(
            async (data, {rejectWithValue}) => {
                try {
                    const { token } = await authService.registration(data);
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
        login: create.asyncThunk<JwtData, IUser, { rejectValue: string}>(
            async (data, {rejectWithValue}) => {
                try {
                    const { token }  = await authService.login(data);
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
export const { login, registration } = authSlice.actions;