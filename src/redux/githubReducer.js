import {SearchRepoAPI} from "../api/api";

const GET_REPO = "GET_REPO";


let initialState = {
    repos:[],
    isLoading:false,
    history:[]
}

const githubReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_REPO:
            return {...state, repos: action.repos}
        default:
            return state;
    }
}

export const setRepo = (repos) => ({type: GET_REPO, repos})

export const getRepo = (repoName) => async (dispatch) =>{
    let data = await SearchRepoAPI.searchRepo(repoName)
    dispatch(setRepo(data.items))
}

export default githubReducer;