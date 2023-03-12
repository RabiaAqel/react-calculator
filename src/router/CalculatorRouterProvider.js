import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ErrorView from '../components/pages/ErrorView'
import HomeView from '../components/pages/HomeView'
import LoginView from '../components/pages/LoginView'
import { PublicRoute } from '../components/PublicRoute'
import SessionProvider from '../sessionProvider/SessionProvider'
import { MainLayout } from './MainLayout'
import  { action as loginAction } from '../components/LoginForm'
import { ProtectedRoute } from '../components/ProtectedRoute'
import HistoryView from '../components/pages/HistoryView'
import CalculatorView from '../components/pages/CalculatorView'
import NotFoundView from '../components/pages/NotFoundView'


const router = createBrowserRouter(
	createRoutesFromElements([
		<Route element={<SessionProvider />} errorElement={<ErrorView />} key={'error'}>
			<Route element={<MainLayout />}>
				<Route path="/" element={<HomeView />} key={'home'}/>
				<Route
					path="/login"
					element={<PublicRoute element={<LoginView />} />}
					action={loginAction}
					key={'login'}
				/>
				<Route path="/history" element={<ProtectedRoute />} key={'protected-history'}>
					<Route index element={<HistoryView />} key={'history'}/>
				</Route>
				<Route path="/calculator" element={<ProtectedRoute />} key={'protected-calculator'}>
					<Route index element={<CalculatorView />} key={'calculator'}/>
				</Route>
			</Route>
			<Route path="*" element={<NotFoundView />}  key={'notfoundview'}/>
		</Route>,
	]),
)


const CalculatorRouterProvider = () => {
	return <RouterProvider router={router} />
}

export default CalculatorRouterProvider
