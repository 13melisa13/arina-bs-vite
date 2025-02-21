import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BaseProduct } from './BaseProduct'
export class Product extends BaseProduct {
	constructor(
		name: string,
		id: number,
		// description: string,
		price: number,
		// discount?: number | null ,
		img: string | null = null,
		// categoryId?: number | null
	) {
		super(name, id,  price,  img)
	}
}
type TProductInCart = {
	product: Product
	count: number
}

type TProductsState = {
	productsInCart: Array<TProductInCart>
}

const initialState: TProductsState = {
	productsInCart: [],
}

const productSlice = createSlice({
	name: 'productCart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<Product>) => {
			state.productsInCart.push({ product: action.payload, count: 1 })
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			state.productsInCart = state.productsInCart.filter(
				(productInCart) => productInCart.product.getId() !== action.payload
			)
		},
		incrementProduct: (state, action: PayloadAction<number>) => {
			const product = state.productsInCart.find(
				(productInCart) => productInCart.product.getId() === action.payload
			)
			if (product && product.count > 0 && product.count < 20) {
				product.count++;
			}
		},
		decrementProduct: (state, action: PayloadAction<number>) => {
			const product = state.productsInCart.find(
				(productInCart) => productInCart.product.getId() === action.payload
			)
			if (product && product.count > 1) {
				product.count--;
			}
		},
	},
	selectors: {
		getProducts: (state: TProductsState) => state.productsInCart,
		getProductsCount: (state: TProductsState) => state.productsInCart.length,
		getTotalPrice: (state: TProductsState) => {
			return state.productsInCart.reduce((acc, product) => {
				return acc + product.product.getPrice() * product.count
			}, 0)
		},
	},
})

export const { addProduct, removeProduct, incrementProduct, decrementProduct} =
	productSlice.actions
export const { getProducts, getProductsCount, getTotalPrice } =
	productSlice.selectors
export const productReducer = productSlice.reducer
