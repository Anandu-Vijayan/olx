import React,{useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom'
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError] = useState('')
  const {firebase}=useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (username.length === 0 && phone.length===0 &&  email.length === 0 && password.length===0 ) {
      setError("true")
    }

    if(username.length !== 0 && phone.length !==0 && email.length !==0 && password.length !==0 ){

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push("/login")

        })

      })
    })
  }



  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleSubmit }>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <span>{error && username.length <= 0 ? 
               <label style={{ color: "red" }} >name cannot be empty </label> : ""}</span><br/>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <span>{error && email.length <= 0 ? 
               <label style={{ color: "red" }} >email cannot be empty </label> : ""}</span><br/>
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <span>{error && phone.length <= 0 ? 
               <label style={{ color: "red" }} >Phone cannot be empty </label> : ""}</span><br/>
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <span>{error && password.length <= 0 ? 
               <label style={{ color: "red" }} >Password cannot be empty </label> : ""}</span><br/>
          <br />
          <button>Signup</button>
        </form>
        <a href='' onClick={()=>{history.push('/login')}} >Login</a>
      </div>
    </div>
  );
}
