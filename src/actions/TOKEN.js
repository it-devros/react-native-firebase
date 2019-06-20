
import { AsyncStorage } from 'react-native'


export const storeAsyncToken = (token) => {
	return AsyncStorage.setItem('token', token)
}


export const getAsyncToken = () => {
  return AsyncStorage.getItem('token')
}


export const removeAsyncToken = () => {
  return AsyncStorage.removeItem('token')
}



