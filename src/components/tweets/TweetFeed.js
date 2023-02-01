import { useEffect, useState } from "react";
import axios from "axios";
import { Tweet } from "./Tweet";
import { TweetCreator } from "./TweetCreator";
const API_URL = process.env.REACT_APP_API_URL;

export function TweetFeed(){
    
    //from localStorage
    const currentUserId = JSON.parse(localStorage.getItem('user')).id;
    const [tweets,setTweets] = useState();
    const [loading,setLoading] = useState(false);
    const [newTweet, setNewTweet] = useState();

    useEffect(()=>{
        const dataFetch = () =>{
            const data =  axios.get(API_URL+"/tweets/followers/"+currentUserId).then(
                (data)=>{
                    setTweets(data.data.followers)
                    console.log(tweets)
                    console.log(data.data.followers)
                    if(data){
                        setLoading(true);
                    }
                }
            )
            
        }
        dataFetch();
        console.log(tweets)
        
    },[newTweet])

    

    return(
        <div>
            <TweetCreator setNewTweet={setNewTweet} />
            {
                loading && tweets.map((user)=>
                <>
                    {
                        user.tweets.map((tweet)=>
                        <Tweet username={user.username} text={tweet.text} name={user.firstName+" "+user.lastName} time={tweet.time}/>
                        )
                    }
                </>
                )
            }
        </div>
    )

}