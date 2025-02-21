import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {register} from "./registerAction";
import {TFieldType} from "../types/TFieldData";
import {TRegisterData} from "../types/TRegisterData";

type TRegisterState = {
    form: TRegisterData;
    error: string | null;
    sending: boolean;
}

const initialState: TRegisterState = {
    form: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        password2: ""
    },
    error: null,
    sending: false,
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setFormValue: (state, action: PayloadAction<TFieldType<TRegisterData>>) => {
            state.form[action.payload.field] = action.payload.value;
        }
    },
    selectors: {
      sendingSelector: (state) => state.sending,
      sendErrorSelector: (state) => state.error,
      registerSelector: (state) => state.form,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.error = null;
                state.sending = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.sending = false;
                state.error = action.error.message ?? null;
            })
            .addCase(register.fulfilled, (state) => {
                state.sending = false;
            })

    }
});

export const registerReducer  = registerSlice.reducer;
export const { setFormValue } = registerSlice.actions;

export const {
    sendingSelector,
  sendErrorSelector,
  registerSelector
} = registerSlice.selectors;