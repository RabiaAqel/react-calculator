import styled from 'styled-components'

import HistoryList from '../HistoryList'

const HistoryView = () => {

	return (
		<Container>
			<HistoryList/>
		</Container>
	)
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`

export default HistoryView
