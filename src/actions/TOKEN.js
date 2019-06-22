
import { AsyncStorage } from '@react-native-community/async-storage'


export const storeAsyncToken = (token) => {
	return AsyncStorage.setItem('token', token)
}


export const getAsyncToken = () => {
  return AsyncStorage.getItem('token')
}


export const removeAsyncToken = () => {
  return AsyncStorage.removeItem('token')
}



