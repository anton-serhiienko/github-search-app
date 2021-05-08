import {SearchRepoAPI} from "../api/api";

const GET_REPO = "GET_REPO";
const ADD_HISTORY = "ADD_HISTORY"



let initialState = {
    repos:[],
    history:[],
}

const githubReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_REPO:
            return {repos: action.repos}

        // case ADD_HISTORY:
        //     let historyItem = {
        //         requestName: action.request
        //     }
        //     return {...state, history: [...state.history, historyItem]}
        default:
            return state;
    }
}

export const setRepo = (repos) => ({type: GET_REPO, repos})

// export const addHistory = (request) =>({type:ADD_HISTORY, request})

export const getRepo = (repoName) => async (dispatch) =>{

    let data = await SearchRepoAPI.searchRepo(repoName)
    dispatch(setRepo(data.items))


}



export default githubReducer;