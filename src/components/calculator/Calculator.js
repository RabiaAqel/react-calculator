import { useDispatch, useSelector } from 'react-redux'
import { clearScreen, getScreenValue, setScreenValue } from '../../reducers/calculatorSlice'
import { registerKeystroke } from '../../reducers/calculatorSlice'
import styled from 'styled-components'

import KeyPad from './keypad'
import Screen from './Screen'

const operators = new Set([ '=', '+', '-', '*', '/', 'C' ])

const Calculator = () => {
	const calculatorValue = useSelector(getScreenValue)
	const dispatch = useDispatch()

	const handleKeyClick = (e) => {
		e.preventDefault()
		const value = e.target.innerHTML
		dispatch(setScreenValue({ equation: calculatorValue.equation + value, result: calculatorValue.result }))
	}

	const handleEqualsClick = () => {
		let result
		try {
			const usingAns = calculatorValue.result && operators.has(calculatorValue.equation.charAt(0))
			result = eval(usingAns? calculatorValue.result + calculatorValue.equation : calculatorValue.equation)
		}
		catch (err) {
			dispatch(setScreenValue({ equation: '', result: 'Math Error!' }))
		}
		dispatch(setScreenValue({ equation: '', result: result===undefined? 'Math Error!' : result }))
	}

	const handleClearClick = () => {
		dispatch(clearScreen())
	}
  
	const handleOnClick = (e) => {
		const value = e.target.innerHTML
		dispatch(registerKeystroke(value))
		switch (value) {
			case 'C':
				return handleClearClick()
			case '=':
				return  handleEqualsClick(e)
			default:
				return  handleKeyClick(e)
		}
	}

	return (
		<Container>
			<Screen value={!calculatorValue.equation ? calculatorValue.result : calculatorValue.equation} />
			<KeyPad onClick= {handleOnClick} operators={operators}/>
		</Container>
	)
}

const Container = styled.div`
    width: 42rem;
    height: 70rem;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0 0.1rem 0.4rem;
`

export default Calculator
