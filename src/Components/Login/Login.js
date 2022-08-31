import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const [error,setError] = useState('')
  const history=useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    if (email.length === 0 && password.length===0 ) {
      setError("true")
    }
    if(email.length !==0 && password.length !==0 ){

      firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
        history.push('/')
        console.log(response);
        
      }).catch((error)=>{
        alert(error.message)
      })
    
  }
}
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            id="fname"
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <span>{error && email.length <= 0 ? 
               <label style={{ color: "red" }} >email cannot be empty </label> : ""}</span><br/>
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue=""
          />
          <br />
          <span>{error && password.length <= 0 ? 
               <label style={{ color: "red" }} >Password cannot be empty </label> : ""}</span><br/>
          <br />
          <button>Login</button>
        </form>
        <a href='' onClick={()=>{history.push('/signup')}} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
