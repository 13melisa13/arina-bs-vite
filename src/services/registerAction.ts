import {createAsyncThunk} from "@reduxjs/toolkit";
import {TRegisterData} from "../types/TRegisterData";

const register = createAsyncThunk(
    "auth/register",
    async ({email, password, lastName, firstName}: TRegisterData) => {
        // return apiLogin(email, password);
        //     return Promise.reject('error');
        return Promise.resolve('success register');
    });
export {register};