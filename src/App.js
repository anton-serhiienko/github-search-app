import React from "react";
import './App.css';
import {connect} from "react-redux";


function App() {
  return (
    <div className="App">
      <input type="text"/>
      <button>Search</button>
    </div>
  );
}

let mapStateToProps = (state) =>({
    isLoading: state.githubReducer.isLoading
})

let mapDispatchToProps = (dispatch) => ({

})

let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;
