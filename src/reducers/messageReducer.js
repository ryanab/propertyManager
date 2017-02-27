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
      let tenant = action.payload.tenant
      let updatedList = (state[tenant]==null) ? [] : Object.assign([], state[tenant])
      updatedList.push(action.payload)
      updated[tenant] = updatedList
      return updated

    default:
    return updated

  }

}