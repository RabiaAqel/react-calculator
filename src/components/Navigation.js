/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../consts/theme/colors'
import { fontSizes } from '../consts/theme/typography'
import { clearHistory, clearScreen } from '../reducers/calculatorSlice'

export const Navigation = ({ session }) => {
	const [ isLoading, setLoading ] = useState(false)
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const onLogout = async () => {
		setLoading(true)
		dispatch(clearHistory())
		dispatch(clearScreen())
		await session.logout()
		setLoading(false)
		navigate('/')
	}

	if (!session.data) {
		return null
	}

	return (
		<NavigationBar>
			<PagesSection>
				<StyledLink to="/calculator" isactive={pathname === '/calculator'}>Calculator</StyledLink>
				<StyledLink to="/history" isactive={pathname === '/history'}>History</StyledLink>
			</PagesSection>
			<SessionSection>
				<div>Hello {session.data.username}</div>
				<button disabled={isLoading} onClick={onLogout}>
					{isLoading ? 'loading...' : 'Logout'}
				</button> 
			</SessionSection>
		</NavigationBar>
	)
}


const PagesSection = styled.div`
  width: 70%;
  background-color: ${ colors.gray.gray3 };
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: felx-start;

  }
`

const StyledLink = styled(Link)`
    padding: 0 1rem;
    color: ${ ({ isactive }) => isactive? colors.yellow.yellow2 : colors.gray.gray4 };
    ${ ({ isactive }) => isactive && 'font-weight: 700' };

    font-size: ${ fontSizes.xl };
    text-decoration:none;
    :hover {
      color: ${ colors.yellow.yellow2 };
      }
  }
`

const SessionSection = styled.div`
  width: 30%;
  background-color: ${ colors.gray.gray3 };
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: ${ colors.yellow.yellow2 };
  font-size: ${ fontSizes.xl };

  button {
    margin: 0 1rem 0 1rem;
    color: ${ colors.gray.gray4 };
    font-size: ${ fontSizes.xl };
    border: none;
    cursor: pointer;
  }
`

const NavigationBar = styled.div`
  ackground-color: ${ colors.gray.gray3 };
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    margin: 0 0.1rem;
  }
`
