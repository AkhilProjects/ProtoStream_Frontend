import React from "react";

const SignupForm = () => {
  return (
    <form action="">
      <h1 className="head">Welcome to ProtoStream</h1>
      <label htmlFor="Name">Name</label>
      <input type="text" name="Name" id="name" placeholder="John Doe" />
      <label htmlFor="email-feild">E-mail</label>
      <input
        type="email"
        name="email-feild"
        id="email"
        placeholder="example@email.com"
      />
      <label htmlFor="password-feild">Password</label>
      <input
        type="password"
        name="password-feild"
        id="password"
        placeholder="********"
      />
      <button type="submit" className="btn login">
        Sign Up
      </button>
      
        <button type="submit" className="btn google">
          <i className="fab fa-google"></i> Sign Up with Google
        </button>
  
      <span className="signup">
        Already have an account?
        <a href="#"> Login</a>
      </span>
    </form>
  );
};

export default SignupForm;
