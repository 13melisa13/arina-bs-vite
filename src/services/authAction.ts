import {TLoginData} from "../types/TLoginData";
import {createAsyncThunk} from "@reduxjs/toolkit";


const login = createAsyncThunk(
    "auth/login",
    async ({email, password}: TLoginData) => {
        // return apiLogin(email, password);
        //     return Promise.reject('error');
        return Promise.resolve('success login');
    }
);

export {login};