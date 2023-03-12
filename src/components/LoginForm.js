import { useActionData, useNavigation, useOutletContext } from 'react-router'
import { Form, redirect } from 'react-router-dom'
import { useEffect } from 'react'
import styled from 'styled-components'

import { fakeApi } from '../data/fakeApi'
import colors from '../consts/theme/colors'
import { fontSizes } from '../consts/theme/typography'
import { validateEmail, validateUserName } from '../utils/validationUtils'


export const LoginForm = () => {
	const navigation = useNavigation()
	const session = useOutletContext()
	const isLoading =
    navigation.state === 'loading' || navigation.state === 'submitting'
	const data = useActionData()

	useEffect(() => {
		if (data && !data.error) {
			session.login(data)
			redirect('/')
		}
	})

	return (
		<Container>
			<Form action="/login" method="post">
				<InputRow>
					<StyledInput 
						disabled={isLoading} 
						type="text" 
						name="username"  
						placeholder='Username' 
						hasError={data?.errorData?.includes('username')}
					/>
				</InputRow>
				<InputRow>
					<StyledInput 
						disabled={isLoading} 
						type="text" 
						name="email" 
						placeholder='Email' 
						hasError={data?.errorData?.includes('email')}
					/>
				</InputRow>
				<InputRow>
					<StyledButton disabled={isLoading}>
						{isLoading ? 'loading...' : 'Login'}
					</StyledButton>
				</InputRow>
			</Form>
			{data && data.error && <div>{data.error}</div>}
		</Container>
	)
}

export async function action({ request }) {
	const formData = await request.formData()
	let emptyFields = []
	if (formData.get('username') === '') {
		emptyFields.push('username')
	}

	if (formData.get('email') === '') {
		emptyFields.push('email')
	}

	emptyFields = []

	if (!validateUserName(formData.get('username'))) {
		emptyFields.push('username')
	}
    
	if (!validateEmail(formData.get('email'))) {
		emptyFields.push('email')
	}

	if (emptyFields.length > 0) {
		return {
			errorData: emptyFields,
			error: 'Please fix fields marked in red!',
		}
	}


	const sessionData = {
		username: formData.get('username'),
		password: formData.get('email'),
	}
	await fakeApi.login(sessionData)
	return sessionData

}

const Container = styled.div`
    width: 50rem;
    height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0 0.1rem 0.4rem;
    color: ${ colors.gray.gray4 };
    font-size: ${ fontSizes.xl }
`

const InputRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
`

const StyledInput = styled.input`
    width: 35rem;
    height: 5rem;
    padding: 1.2rem 2rem;
    margin: 0.8rem 0;
    display: inline-block;
    border: 0.1rem solid ${ ({ hasError }) => hasError? 'red' : colors.gray.gray1 };
    border-radius: 0.4rem;
    box-sizing: border-box;
`

const StyledButton = styled.button`
  width: 35rem;
  height: 4rem;
  background-color: #FFFFFF;
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: ${ colors.gray.gray2 };
  font-size: ${ fontSizes.xl };
  font-weight: 400;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition-duration: 0.5s;

  :hover {
    color: ${ colors.green.green1 };
    background-color: rgb(249,250,251);
  }

`

