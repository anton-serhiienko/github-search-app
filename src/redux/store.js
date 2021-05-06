import {applyMiddleware, combineReducers, createStore} from "redux";
import githubReducer from './githubReducer';
import thunkMiddleware from"redux-thunk"

let reducers = combineReducers({
    githubReducer: githubReducer,
})

let store =createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;