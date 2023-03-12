import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { fakeApi } from '../data/fakeApi'
import { fakeCache } from '../data/fakeCache'

const SessionProvider = () => {
	const cache = fakeCache.getItem('cache')
	const [ data, setData ] = useState(cache)

	useEffect(() => {
		fakeApi.getSession().then(setData)
	}, [])

	const logout = async () => {
		setData(null)
		await fakeApi.logout()
	}

	return <Outlet context={{ data, login: setData, logout }} />
}

export default SessionProvider
