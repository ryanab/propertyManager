import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { accountReducer, propertyReducer, transactionReducer, messageReducer } from '../reducers'

var store;

export default {

	configureStore: (initial) => {
		const reducers = combineReducers({
      transaction: transactionReducer,
    	property: propertyReducer,
			account: accountReducer,
			message: messageReducer
		})

		store = createStore(
			reducers,
			initial,
			applyMiddleware(thunk)
		)
		return store
	},
	
	currentStore: () => {
		return store
	}
}