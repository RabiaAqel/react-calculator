import { useOutletContext } from 'react-router-dom'

import CalculatorView from './CalculatorView'
import LoginView from './LoginView'

const HomeView = () => {
	const session = useOutletContext()
	return session.data ? <CalculatorView /> : <LoginView />
}

export default HomeView
