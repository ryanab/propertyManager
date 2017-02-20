import constants from '../constants'

var initialState = {
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)    
  switch(action.type){

    case constants.PROPERTIES_RECEIVED:
      action.payload.forEach(property=>{
        property.displayStyle = 'Summary'
        updated[property.id] = property
      })
      return updated
      
    case constants.PROPERTY_CREATED:
      let newProp = action.payload
      newProp.displayStyle = 'Summary'
      updated[newProp.id] = newProp
      return updated
          
    case constants.TOGGLE_PROPERTY_DISPLAY_TYPE:
      let propertyCopy = Object.assign({}, state[action.id])
      propertyCopy.displayStyle = (propertyCopy.displayStyle=='Detailed') ? 'Summary' : 'Detailed'
      updated[action.id] = propertyCopy
      return updated

    default:
      return updated
  }
}