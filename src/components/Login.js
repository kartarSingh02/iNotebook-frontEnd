import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom'

const Login =(props) => {

    const [credentials, setCredentials] = useState({email:"", password:""})
    let navigate = useNavigate ();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email: credentials.email, password:credentials.password})
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            // save the auth and redirect
            localStorage.setItem('token',json.authtoken)
            // before we use useHistory which have been changes in update version to navigate and this will navigate user to homepage
            navigate("/")
            props.showAlert("Login SuccessFully","success")
        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChange = (e)=>{
        // spreading operator used that it will change the state of title,desc and tags as per change i.e values setting to name
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onChange} value={credentials.email} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name="password"/>
            </div>
            <button type="submit" className="btn btn-primary" >LogIn</button>
        </form>
    </div>
  )
}

export default Login