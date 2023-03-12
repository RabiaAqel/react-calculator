import { Outlet, useOutletContext } from 'react-router'
import styled from 'styled-components'
import { Navigation } from '../components/Navigation'

export const MainLayout = () => {
	const session = useOutletContext()

	return (
		<>
			<Navigation session={session} />
			<StyledContainer isLoggedIn={!!session}>
				<Outlet context={session} />
			</StyledContainer>
		</>
	)
}

const StyledContainer = styled.div`
    min-height: 50rem;
    padding: 0.1rem;
  `


