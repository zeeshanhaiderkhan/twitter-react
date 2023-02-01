import {BrowserRouter as Router,createBrowserRouter} from 'react-router-dom';
import { TweetFeed } from '../components/tweets/TweetFeed';


import { Login } from '../components/users/Login';
import { Signup } from '../components/users/Signup';



export const router = createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:'/tweet-feed',
        element:<TweetFeed/>
    }
])

