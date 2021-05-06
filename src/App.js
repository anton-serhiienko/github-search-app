import React, {useState} from "react";
import './App.css';
import {connect} from "react-redux";
import {getRepo} from "./redux/githubReducer";


let App = (props) => {
    let handleSearchClick = (request) => {
        props.getRepo(request)
    }

    let [searchRequest, setSearchRequest] = useState("")

    let onFormChange = (e) =>{
        setSearchRequest(e.currentTarget.value)
    }

  return (
    <div className="App">
      <input onChange={onFormChange} type="text"/>
      <button onClick={() => handleSearchClick(searchRequest)}>Search</button>
    </div>
  );
}

let mapStateToProps = (state) =>({
    isLoading: state.githubReducer.isLoading
})



let AppContainer = connect(mapStateToProps, {getRepo})(App)

export default AppContainer;
