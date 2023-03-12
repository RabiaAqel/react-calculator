import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	keystrokes: [],
	screen: {
		equation: '',
		result: '',
	}
}

const historyItemsLimit = 20

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		registerKeystroke: (state, action) => {
			if (state.keystrokes.length === historyItemsLimit) {
				state.keystrokes.shift()
			}
			state.keystrokes.push({ timestamp: new Date().toLocaleString(), key: action.payload })
		},
		clearHistory: (state) => {
			state.keystrokes = []
		},
		setScreenValue: (state, action) => {
			state.screen = action.payload
		},
		clearScreen: (state) => {
			state.screen = {
				equation: '',
				result: '',
			}
		},
	},
})

export const { registerKeystroke, clearHistory, setScreenValue, clearScreen } = calculatorSlice.actions

export const getKeystrokes = (state) => state.calculator.keystrokes
export const getScreenValue = (state) => state.calculator.screen

export default calculatorSlice.reducer
