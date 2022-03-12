import React from 'react'
import axios from 'axios';
import { useState } from "react";
const Login = (props) => {
    const [error, setError]=useState(null);
    const[loading, setLoading]=useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [rememberMe, setRememberMe] = useState(true);
    const handleSetRememberMe = () => setRememberMe(!rememberMe);
  
    const handleLogIn = ()=>{
      axios.post("http://51.195.148.112/api/admin/auth/login",{
        email:email,
        password:password
      }).then(response=>{
        console.log('response:',response);
        localStorage.setItem('token',response.data.token)
      });
      props.history.push('/dashboard')
    }
  return (
    <div id="auth">

        <div className="row h-100">
            <div className="col-lg-5 col-12">
                <div id="auth-left">
                    <div className="auth-logo">
                        <a href="index.html"><img src="assets/images/logo/logo.png" alt="Logo"/></a>
                    </div>
                    <h1 className="auth-title">Log in.</h1>
                    <p className="auth-subtitle mb-5">Log in with your data that you entered during registration.</p>

                    <form action="index.html">
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="form-control form-control-xl" placeholder="Email"/>
                            <div className="form-control-icon">
                                <i className="bi bi-person"></i>
                            </div>
                        </div>
                        <div className="form-group position-relative has-icon-left mb-4">
                            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control form-control-xl" placeholder="Password"/>
                            <div className="form-control-icon">
                                <i className="bi bi-shield-lock"></i>
                            </div>
                        </div><br/>
                        {error && <div className="error">{error}</div>}

                        <div className="form-check form-check-lg d-flex align-items-end">
                            <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label text-gray-600" for="flexCheckDefault">
                                Keep me logged in
                            </label>
                        </div>
                        <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5" value={loading? "Loading...":"LogIn"} onClick={handleLogIn}>LogIn</button>
                    </form>
                    <div className="text-center mt-5 text-lg fs-4">
                        <p className="text-gray-600">Don't have an account? <a href="auth-register.html"
                                className="font-bold">Sign
                                up</a>.</p>
                        <p><a className="font-bold" href="auth-forgot-password.html">Forgot password?</a>.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 d-none d-lg-block">
                <div id="auth-right">

                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
