import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import colors from '../consts/theme/colors'
import { fontSizes } from '../consts/theme/typography'
import { clearHistory, getKeystrokes } from '../reducers/calculatorSlice'
import { StyledButton } from './Button'

const HistoryList = () => {

	const dispatch = useDispatch()
	const keystrokes = useSelector(getKeystrokes)
	const listItems = keystrokes.map((keystoke, index) => 
		<ListItem key={index}>
			<li>
				{keystoke.key} [{keystoke.timestamp}]
			</li>
		</ListItem>)

	const handleClearHistoy = () => {
		dispatch(clearHistory())
	}
	return (
		<Container>
			<ol>
				{listItems}
			</ol>
			<StyledButton onClick={ handleClearHistoy}>Clear History</StyledButton>
		</Container>
	)
}

const Container = styled.div`
	width: 40rem;
	padding: 1.5rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
`

const ListItem = styled.div`
	width: 100%;
	height: 5rem;
	display: flex;
    justify-content: center;
    align-items: center;
	padding: 0.5rem;
	margin-bottom: 1rem;	
	border-radius: 0.5rem;
	color: ${ colors.gray.gray4 };
	font-size: ${ fontSizes.xl };
	:hover {
		box-shadow: rgba(0, 0, 0, 0.16) 0 0.1rem 0.4rem;
	}
`

export default HistoryList
