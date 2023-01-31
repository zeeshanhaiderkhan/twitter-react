
export function Tweet(props){
    
    return(
        <div>
            <h5>{props.name}</h5><p>@{props.username}</p>
            <p>{props.text}</p>
        </div>
    )
}