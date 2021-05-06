import React, {useState} from "react";
import './App.css';
import {connect} from "react-redux";
import {addHistory, getRepo} from "./redux/githubReducer";
import SearchResult from "./components/SearchResult";



let App = (props) => {
    let handleSearchClick = (request) => {
        props.getRepo(request)
        // props.addHistory(request)
    }

    let [searchRequest, setSearchRequest] = useState("")

    let onFormChange = (e) =>{
        setSearchRequest(e.currentTarget.value)
    }

    let searchResultItems = props.repos.map(r =>
        <SearchResult repoName={r.full_name}
                      htmlUrl={r.html_url}
                      key={r.key} desc={r.description}
                      stars={r.stargazers_count} language={r.language}/>)
  return (
    <div className="App">
      <input onChange={onFormChange} type="text"/>
      <button onClick={() => handleSearchClick(searchRequest)}>Search</button>
        {searchResultItems}
    </div>

  );
}

let mapStateToProps = (state) =>({
    isLoading: state.githubReducer.isLoading,
    repos : state.githubReducer.repos
})



let AppContainer = connect(mapStateToProps, {getRepo})(App)

export default AppContainer;
