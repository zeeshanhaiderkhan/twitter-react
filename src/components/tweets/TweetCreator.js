import './TwitterCreator.css'
import { useState } from 'react'
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

//currently storing login in localStorage

export function TweetCreator(){
    const[tweet,setTweet] = useState();

    function createTweet(e){
        e.preventDefault();
        axios.post(API_URL+"/tweets",{
            created_by:1,
            text:tweet
        }).then(
            (result)=>{
             setTweet('');   
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        );
    }

    return(
        <div className="form-floating tweet-creator">
            <form onSubmit={createTweet} >
            <textarea className="form-control" placeholder="What's happening?" id="floatingTextarea" value={tweet} onChange={(e)=>{
                setTweet(e.target.value);
            }}></textarea>
            
            <div className="flex-container">
                <button className="btn btn-primary" id="tweetBtn" type='submit' >Tweet</button>
            </div>
            </form>
        </div>
    )
}