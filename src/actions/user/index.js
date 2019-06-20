import { USER, COMMON } from '../../configs/types'
import API from '../API'
import { storeAsyncToken, getAsyncToken,removeAsyncToken } from '../TOKEN'



export const checkAuthStatus = () => {
	return (dispatch) => {
		return getAsyncToken().then(token => {
			if (token) {
				dispatch({
					type: USER.SIGNED_IN,
					payload: {
						token: token
					}
				})
				return token
			}
		})
	}
}