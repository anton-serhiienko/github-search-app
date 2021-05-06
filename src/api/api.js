import * as axios from "axios";

export const SearchRepoAPI = {
    searchRepo(repoName){
        return axios.get(`https://api.github.com/search/repositories?q=${repoName}&order=desc`)
            .then(response=>{
                return response.data
            })
    }
}
