import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [user, setUser] = useState();
  const [pass, setPass] = useState();

  // let navigate = useNavigate();

  function handleSubmit() {


    if (user === "admin" && pass === "admin") {
      localStorage.setItem("username", user);
      localStorage.setItem("password", pass);
      alert("login successfully")

      // navigate("/")

    } else {
      alert("invalid credential")
    }
  }

  return (
    <div className='login'>

      <form>
        <h3>Login Here</h3>

        <label for="form-label">Username</label>
        <input onChange={(e) => setUser(e.target.value)} className='form-control' type="text" placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input onChange={(e) => setPass(e.target.value)} className='form-control' type="password" placeholder="Password" id="password" />

        <button onClick={(e) => handleSubmit(e.target.value)}>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </div>
  )
}