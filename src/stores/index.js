import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { propertyReducer } from '../reducers'

var store;

export default {

	configureStore: (initial) => {
		const reducers = combineReducers({
            property: propertyReducer
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