import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { accountReducer, propertyReducer, transactionReducer } from '../reducers'

var store;

export default {

	configureStore: (initial) => {
		const reducers = combineReducers({
      transaction: transactionReducer,
    	property: propertyReducer,
			account: accountReducer
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