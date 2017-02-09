import constants from '../constants'

var initialState = {
    list: []
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state)    
    switch(action.type){

        case constants.PROPERTIES_RECEIVED:
            updated.list = action.payload
            return updated
        
        case constants.PROPERTY_CREATED:
            let updatedList = state.list
            updatedList.push(action.payload)
            updated.list = updatedList
            return updated
            
        default:
            return updated
    }
    
}