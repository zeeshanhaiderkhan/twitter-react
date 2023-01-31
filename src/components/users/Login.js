import {useForm} from 'react-hook-form';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export function Login(){

    const {register,handleSubmit,setError,formState:{errors}} = useForm();
    const onSubmit = data=> {
        axios.post(API_URL+"/auth",data).then(
            (res)=>{
                //result printing
                console.log(res)

                //currently storing in localStorage
                localStorage.setItem("user",JSON.stringify(res.data))
            }
        ).catch(
            err=>{
                if(err.response.status == 401){
                    setError('password',{
                        type:'custom',
                        message:"Invalid Email or Password!"
                    })
                }
            }
        )
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <label >Email Address</label>
                <input {...register('email',{required:true})} type="email" name="email" className="form-control" placeholder='Enter email'/>
            </div>
            <div className='form-group'>
                <label  >Password</label>
                <input {...register('password',{required:true})} type="password" name='password' className='form-control' placeholder='Password' />
            </div>

            {errors.password &&
                <div className='alert alert-danger' role='alert'>{errors.password.message}</div>
            }
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
    )
}