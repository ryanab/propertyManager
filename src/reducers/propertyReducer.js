import constants from '../constants'

var initialState = {
    
}

export default (state = initialState, action) => {
    
    switch(action.type){
        
        case constants.PROPERTIES_RECEIVED:
            
            return state
            
        default:
            
            return state
        
    }
    
}