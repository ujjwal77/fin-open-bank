import React from "react";
import { NavLink } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

function Login() {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("login working");
  };

  return (
    <div>
      <div style={{ height: "40px" }}></div>
      <body className="login-container">
        <div id="login-div" className="">
          <div className="fields ">
            <span style={{width:'100%',}} className="fields-span">
              Welcome back!
            </span>
            <span style={{display:'block',width:'100%',marginBottom:1+'rem'}} >
              Sign in and continue your journey.
            </span>
          </div>
          <div className="  md:max-w-sm md:mx-auto login-box">
            <span style={{display:'block'}} className="fields-span">
              Login
            </span>
            <form className="login-form"  onSubmit={handleSubmit} method="POST">
              <div className="field md:w-full">
                <label for="email" className=" label">
                  Username or Email
                </label>
                <div className="inputt">
                  <PersonIcon/>
                  <input
                  className="inputt-area"
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Username or Email"
                />
                </div>
                
              </div>
              <div className="field md:w-full">
                <label for="password" className="label">
                  Password
                </label>
                <div className="inputt">
                  <LockIcon/>
                  <input
                  className="inputt-area"
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />

                </div>
                
              </div>
              <NavLink to="/user">
                <button className=" form-button">
                Login
              </button>
              </NavLink>
            </form>
            <a className=" links" href="/login">
              Forgot password?
            </a>
            <br />

            <NavLink
              className="links"
              to="/signup"
              
            >
              Create New Account <i class="fa fa-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Login;
