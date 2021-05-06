let SearchResult = (props) => {
    return(
        <div>
            <div>
            <a href={props.htmlUrl}>{props.repoName}</a>
            </div>
            <div>
                {props.desc}||{props.stars}||{props.language}
            </div>
        </div>
    )
}

export default SearchResult;