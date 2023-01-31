import {BrowserRouter as Router,createBrowserRouter} from 'react-router-dom';


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
    }
])

