import React from "react";

const LoginForm = () => {
  return (
    <form action="">
      <h1 className="head">Hello,</h1>
      <h1 className="head">Welcome Back</h1>
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
      <span>
        <a href="#">Forget Password?</a>
      </span>
      <button type="submit" className="btn login">
        Login
      </button>

      <button type="submit" className="btn google">
        <i className="fab fa-google"></i>  Login with Google
      </button>

      <span className="signup">
        Don't have an account?
        <a href="#"> Sign Up</a>
      </span>
    </form>
  );
};

export default LoginForm;
