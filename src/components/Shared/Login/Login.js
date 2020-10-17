import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, firebaseInitializedApp, handleFbSignIn, handleGoogleSignIn, handleSignOutfromUser, signInWithEmailAndPassword } from './LogInManager';

import './Login.css';
import googleicon from '../../../Icon/google.png';
import fbicon from '../../../Icon/fb.png';
import { UserContext } from '../../../App';
import Header from '../Header/Header';





const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [user, setUser] = useState({
    isSigningIn : 'false',
    first_name : '',
    last_name : '',
    name : '',
    email : '',
    password : '',
    photo : '',
    error : '',
    success : false
  })
  firebaseInitializedApp();

  const handleResponse = (res, redirect) => {
    setNewUser(res);
    setLoggedInUser(res);
    console.log(res);
    if( redirect === true ) history.replace(from);
  }

  
  const handleBlur = (event) =>{
    let isFormValid = true;
    // console.log(event.target.name, event.target.value);
    if(event.target.name === 'email'){
     isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
     
    }

    if(event.target.name === 'password'){  
      isFormValid = event.target.value.length >8 && /\d/.test(event.target.value) && /[A-Z]/.test(event.target.value);
    }

    if(isFormValid){
      const updateUsers ={...user};
      updateUsers[event.target.name] = event.target.value;
      setUser(updateUsers);

    }
  }
  const googleSignIn = () => {
    handleGoogleSignIn()
    .then((res) =>{
        handleResponse(res, true);
    })
  }

  const FbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const handleSignOut = () => {
    handleSignOutfromUser()
    .then((res) =>{
        handleResponse(res, false);
       
    })
  }



  const handleSubmit = (e) =>{

    if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then((res) =>{
            handleResponse(res, true);
    })

}

    if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then((res) =>{
            handleResponse(res, true);
    })
    }

    e.preventDefault();

  }

let description;

  if(!newUser){
    description = <div> <input type="checkbox" name="checkbox" onChange={() =>setNewUser       (!newUser)}  id=""/>
    <label htmlFor="newUser">Don't have an account?<a>Sign Up Now</a></label></div>
  }
  else{
    description = <div> <input type="checkbox" name="checkbox" onChange={() =>setNewUser       (newUser)}  id=""/>
    <label htmlFor="newUser">Already have an account?<a>Sign In</a></label></div>
  }


      


    return (
      <div>
        <Header></Header>
        
        

            {/* <form id="login" className="log-in-form"  onSubmit={handleSubmit}>

                 <div className="form-body">
                    <input type="email" name="email" id="" onBlur={handleBlur} placeholder="E-mail" /> <br/>
             
                     <input type="password" name="password"  onBlur={handleBlur} id="" placeholder="Password"/><br/> <br/>
                    
                    
                    <input type="submit" value="Log In"/>

                    <h6 className="text-center">Don't have an account?</h6>
                     <Link style={{marginLeft: '90px'}} to="/login">Sign Up Now</Link> 
                        //  <input type="checkbox" name="checkbox" onChange={() =>setNewUser(!newUser)}  id=""/>
                        // <label htmlFor="newUser">Don't have an account?<a>Sign Up Now</a></label>
                 </div>             
             </form>  */}
           
                     

         

            <div  className="sign-up">
               <form id="signUp" className="sign-up-form"   onSubmit={handleSubmit}>
                  <div  className="form-body">
                    {newUser &&  <h5 style={{marginBottom: '15px'}} className="text-center">Create a new account</h5>}
                    {newUser && <input type="text" name="first_name" id="" placeholder="Your First Name" /> }<br/>
                    {newUser && <input type="text" name="last_name" id="" placeholder="Your Last Name" />} <br/> 
                    {newUser && <input type="text" name="name" id=""   placeholder="Your Username" />} <br/>
                    <input type="email" name="email" id=""  onBlur={handleBlur}  placeholder="Your E-mail" /> <br/>

                    <input type="password" name="password" id=""  onBlur={handleBlur}  placeholder="Password"/><br/> 

                     {newUser && <input type="password" name="" id="" placeholder="Confirm Password"/>}<br/> <br/> 
    
                     <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>

                     {description}
                     

                     </div>   

                </form>              
                
                <hr/>
                <button onClick={googleSignIn}> <img className="icon" src={googleicon} alt=""/> Sign in with Google</button> <br/>

                <button onClick={FbSignIn}><img className="icon" src={fbicon} alt=""/> Sign in with Facebook</button>
      

                               
            </div> 

            

    </div>
    );
};

export default Login;