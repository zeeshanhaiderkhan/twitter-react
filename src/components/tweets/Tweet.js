import "./Tweet.css";


export function Tweet(props){
    
    return(
        <div className="tweet">
            <div className="tweet-header">
                <h5 className="tweet-header-name">{props.name}</h5><p className="tweet-header-username">&nbsp;@{props.username}</p>
                <p className="tweet-header-time">&nbsp;·&nbsp; {new Date(props.time).toLocaleString()}</p>
            </div>
            <div className="tweet-body">
                <p className="tweet-body-text">{props.text}</p>
            </div>
        </div>
    )
}