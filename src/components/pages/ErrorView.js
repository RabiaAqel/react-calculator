import { useRouteError } from 'react-router-dom'

const ErrorView = () => {
	const error = useRouteError()
	return (
		<div>
      Error View
			<p>{error.message}</p>
		</div>
	)
}

export default ErrorView
