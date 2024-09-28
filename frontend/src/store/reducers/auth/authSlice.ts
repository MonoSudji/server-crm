import { createSlice } from '@reduxjs/toolkit'
import authService from "../../../api/authService"

interface AuthStateI {
    loading: boolean;
    email: string;
    isAuth: boolean;
}

interface UserInfoI {
    email: string;
    password: string;
}

const AuthState: AuthStateI = {
    loading: false,
    email: "",
    isAuth: false,
}

const todosSlice = createSlice({
    name: 'auth',
    initialState: AuthState,
    reducers: (create) => ({
        registration: create.asyncThunk(
            async (data: UserInfoI) => {
                try {
                    const 
                } catch(error) {
                    console.log(error);
                }   
            },
            {
                pending: (state) => {
                    state.loading = true
                },
                rejected: (state) => {
                   
                },
                fulfilled: (state, action) => {
                   
                },
            }
        ),
    }),
})

export const { } = todosSlice.actions