import constants from '../constants'

var initialState = {

}

export default(state = initialState, action) => {

  let updated = Object.assign({}, state)
  switch(action.type){

    case constants.MESSAGES_RECEIVED:
      updated[action.params.tenant] = action.payload
      return updated

    case constants.MESSAGE_CREATED:
      //updated[action.payload.tenant] = action.payload
      return updated

    default:
    return updated

  }

}