// import { serviceReducer  } from "./serviceSlice";
import { productReducer } from './productSlice'
import { authReducer } from './authSlice'
import { configureStore } from '@reduxjs/toolkit'
import {
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux'
import {registerReducer} from "./registerSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		register: registerReducer,
		productCart: productReducer,
		// serviceCart: productReducer,
	},
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
