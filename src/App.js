import React from "react";
import './App.css';
import {connect} from "react-redux";
import {getRepo} from "./redux/githubReducer";
import SearchResult from "./components/SearchResult";
import Header from "./components/Header";


let App = (props) => {

    let searchResultItems = props.repos.map(r =>
        <SearchResult repoName={r.full_name}
                      htmlUrl={r.html_url}
                      key={r.key} desc={r.description}
                      stars={r.stargazers_count} language={r.language}/>)
  return (
    <div className="App-wrapper">
      <Header getRepo={props.getRepo}/>
      <div className="App-wrapper-content">
          контент
        {searchResultItems}
      </div>
        <div className={"App-wrapper-history"}>
            History
        </div>
    </div>

  );
}

let mapStateToProps = (state) =>({
    isLoading: state.githubReducer.isLoading,
    repos : state.githubReducer.repos
})



let AppContainer = connect(mapStateToProps, {getRepo})(App)

export default AppContainer;
