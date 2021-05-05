import {combineReducers, createStore} from "redux";
import githubReducer from './githubReducer'

let reducers = combineReducers({
    githubReducer: githubReducer,
})

let store =createStore(reducers)

window.store = store;

export default store;