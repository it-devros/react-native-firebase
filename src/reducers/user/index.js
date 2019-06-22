
import { USER } from '../../configs/types'

const initState = {
  is_authed: false,
  token: ''
}


const user = (state = initState, action) => {
  const { type, payload} = action
  
  switch(type){
    case USER.SIGNED_IN:
      return {
        ...state,
        is_authed: true,
        token: payload.token
      }
    
    case USER.SIGNED_OUT:
      return {
        ...state,
        is_authed: false,
        token: ''
      }

    default:
      return state
  }
}

export default user