import styled from 'styled-components'

import Calculator from '../calculator/Calculator'

const CalculatorView = () => {
	return (
		<Container>
			<Calculator/>
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

export default CalculatorView
