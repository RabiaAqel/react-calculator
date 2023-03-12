import { configureStore } from '@reduxjs/toolkit'
import CalculatorReducer from '../reducers/calculatorSlice'

export const store = configureStore({
	reducer: {
		calculator: CalculatorReducer,
	},
})
