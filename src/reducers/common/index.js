
import { COMMON } from '../../configs/types'

const initState = {
  loading: false,
  label: '',
  errors: []
}


const common = (state = initState, action) => {
  const { type, payload} = action
  
  switch(type){
    case COMMON.SERVER_REQUEST:

      return {
        ...state,
        loading:  true,
        label: ''
      }
    
    case COMMON.SERVER_SUCCESS:
      return {
        ...state,
        loading: false,
        label: '',
      }
    
    case COMMON.REMOVE_ERRORS:
      return {
        ...state,
        errors: []
      }
    
    case COMMON.SET_ERRORS:
      return {
        ...state,
        errors: Object.assign([], payload.errors)
      }

    default:
        return state
  }
}

export default common