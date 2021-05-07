import React, {useState} from "react";
import css from "./Header.module.css"
import githubLogo from "./../assets/GitHub-Mark-Light-32px.png"

let Header = (props) =>{

    let handleSearchClick = (request) => {
        props.getRepo(request)
        // props.addHistory(request)
    }

    let [searchRequest, setSearchRequest] = useState("")

    let onFormChange = (e) =>{
        setSearchRequest(e.currentTarget.value)
    }

    return(
        <div className={css.header}>
            <img src={githubLogo} alt={"gitLogo"}/>
            <input onChange={onFormChange} type="text"/>
            <button onClick={() => handleSearchClick(searchRequest)}>Search</button>
        </div>)
}

export default Header;