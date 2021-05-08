import css from "./SearchResult.module.css"


let SearchResult = (props) => {
    let circle = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Yellow_icon.svg/200px-Yellow_icon.svg.png"
    let star = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Empty_Star.svg"


    return(
        <div className={css.resultBlock}>
            <div className={css.repo}>
            <a href={props.htmlUrl}>{props.repoName}</a>
            </div>
            <div className={css.desc}>
                {props.desc}
            </div>
            <div className={css.additional}>
                <img src={star} alt={""}/>
                {props.stars!==0? props.stars + " " :""}
                <img src={circle} alt={""}/>
                {props.language!==null?props.language:""}
            </div>
        </div>
    )
}

export default SearchResult;