import { fakeCache } from './fakeCache'

class FakeApi {
	static REQUEST_TIME = 1000
	static KEY_CACHE = 'cache'

	session = null

	constructor() {
		this.session = fakeCache.getItem(FakeApi.KEY_CACHE)
	}

	#asyncRequest = (callback) =>
		new Promise((resolve) => {
			setTimeout(() => {
				const result = callback()
				resolve(result)
			}, FakeApi.REQUEST_TIME)
		})

	getSession() {
		return this.#asyncRequest(() => this.session)
	}

	login({ username, email }) {
		// dummy login
		this.session = 	{
			username: username,
			password: email,
		}
		
		fakeCache.setItem(FakeApi.KEY_CACHE, this.session)
		return this.getSession()
	}

	logout() {
		// remove session
		this.session = null
		fakeCache.clear()
		return this.#asyncRequest(() => null)
	}
}

export const fakeApi = new FakeApi()
