import styled from 'styled-components'

import { LoginForm } from '../LoginForm'


const LoginView = () => {
	return (
		<Container>
			<LoginForm/>
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

export default LoginView
