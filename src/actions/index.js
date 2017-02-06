import constants from '../constants'
import { APIManager } from '../APIManager'

    const getRequest = (path, params, actionType)=>{
      return (dispatch) => {
        APIManager.get(path, params)
        .then(response=>{
          const payload = response.data || response.user
          dispatch({
            type: actionType,
            payload: payload
          })
        })
        .catch(err=>{
          throw err        
        })
      }
    }
    
    const postRequest = (path, params, actionType)=>{
      return (dispatch) => {
        APIManager.post(path, params)
        .then(response=>{
          const payload = response.data || response.user
          dispatch({
            type: actionType,
            payload: payload
          })
        })
        .catch(err=>{
          throw err        
        })
      }
    }

export default {
    
}