import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { todosReducer, loadingReducer, searchReducer, sortingReducer } from './reducers';
import { thunk } from 'redux-thunk';
const reducer = combineReducers({
	todos: todosReducer,
	loading: loadingReducer,
	search: searchReducer,
	sorting: sortingReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
