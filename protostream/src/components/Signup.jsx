import React, { useState } from "react";
import { authenticate, isAuthenticated, signin } from "../auth";
import {Redirect} from "react-router-dom"
import "../css/registration.css";


const Signup = () => {
  const [addclass, setAddClass] = useState("container");
  const [values, setValues] = useState({
    email:"test.1923cs1029@kiet.edu",
    password:"12345",
    error:"",
    loading:false,
    didRedirect:false,
  })
  const {email,password,error,loading,didRedirect} = values;
  const {user} = isAuthenticated();

  const handleChange = (name) =>(event) =>{
    console.log("inside handlechange");
    setValues({...values,error:false,[name]:event.target.value})
  }

  const onSubmitSignIn=  (event)=>{
    event.preventDefault();
    setValues({...values,error:false,loading:true});
     signin({email,password}).then((data) =>{
      if (data.error){
        setValues({...values,error:data.error,loading:false})
      }else{
        authenticate(data,() =>{
          setValues({
            ...values,didRedirect:true,
          })
          performRedirect();
        })
      }
    })
  }

  const performRedirect = () =>{
    console.log("inside performRedirect");
    if (didRedirect){
      console.log("inside did redirect");
      console.log(user);
      if (user && user.role === 0){
        console.log("inside redirect    ");
        return <Redirect to="/dashboard"/>
      }
    }
  }


  const onSubmitSignUp = () =>{}
  return (
    <div className="registration">
      <div className={addclass} id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-google"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" name="name"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <button onClick={onSubmitSignUp}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form >
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-google"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input onChange={handleChange("email")} type="email" placeholder="Email" name="email"/>
            <input onChange={handleChange("password")} type="password" placeholder="Password" name="password " />
            <a href="#">Forgot your password?</a>
            <button onClick={onSubmitSignIn}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setAddClass("container")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setAddClass("container right-panel-active")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Signup;
