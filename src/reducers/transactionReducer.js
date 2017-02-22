import constants from '../constants'

var initialState = {
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)    
  switch(action.type){

    case constants.RECENT_TENANT_TRANSACTIONS_RECEIVED:
      updated[action.params.tenant] = action.payload
      return updated
        
    default:
      return updated
  }
}