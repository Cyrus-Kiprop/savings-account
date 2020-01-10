import React from 'react';

function Login() {
    return (
      <div className="login-wrapper">
      <div className="form-wrapper">
        <h1>Login</h1>
        <form>
        <div className="email">
              <label htmlFor="email">Email</label>
              <input type="email"
                     className=""
                     placeholder="Email Account"
                     
                     name="email"/>

            </div>
            <div className="password">
              <label htmlFor="phone">Password</label>
              <input type="password"
                     className=""
                     placeholder="Password"
                     
                     name="password"/>

            </div>
         </form>
          <a href="/Savings">
            <button>Log In</button> 
            <a href="reset.js"><small>Forgot Password?</small></a>
          </a>     
     
          </div>
    </div>
    )
}

export default Login;
