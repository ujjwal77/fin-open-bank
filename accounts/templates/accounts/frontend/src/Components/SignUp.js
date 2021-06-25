import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const SignUp = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleChange = (e) => {
    console.log(e);
    value = e.target.value;
    name = e.target.name;

    setUser({ ...user, [name]: value });
  };

  // const handleSubmit=(e)=> {
  //   e.preventDefault();

  //   console.log('The form was submitted with the following data:');
  //   console.log(user);
  // }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    console.log(data);
    console.log(data.msg);

    if (data.msg !== "success") {
      window.alert("Invalid registration");
    } else {
      window.alert("registereed successful");
      console.log("registereed successful");
      
    }
  };

  return (
    <div>
    <div style={{ height: "80px" }}></div>
    <div className="signup-container">
      <div id="login-div" className="">
        <div className="fields ">
          <span style={{ width: "100%" }} className="fields-span">
            Register 
          </span>
          {/* <span
            style={{ display: "block", width: "100%", marginBottom: 1 + "rem" }}
          >
            Sign in and continue your journey.
          </span> */}
        </div>
        <div className="md:max-w-sm md:mx-auto signup-box">
          <span style={{ display: "block" }} className="fields-span">
            SignUp
          </span>
          <form method="POST" className="login-form">
            <div className="field">
              <label className="label" htmlFor="name">
                Name
              </label>
              <div className="inputt">
                  <PersonIcon/>
                    <input
                        type="text"
                        id="name"
                        className="inputt-area"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        autoComplete="off"
                    />
              </div>

              
            </div>

            <div className="field">
              <label className="label" htmlFor="email">
                E-Mail Address
              </label>
              <div className="inputt">
                    <MailIcon/>
                    <input
                    type="email"
                    id="email"
                    className="inputt-area"
                    placeholder="Email ID"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
              </div>
              
            </div>

            <div className="field">
              <label className="label" htmlFor="phone">
                phone
              </label>
              <div className="inputt">
                <PhoneIcon/>
                <input
                type="text"
                id="phone"
                className="inputt-area"
                placeholder="Phone No."
                name="phone"
                value={user.phone}
                
                onChange={handleChange}
              />
              </div>
              
            </div>
            <div className="field">
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="inputt">
                <LockIcon/>
                <input
                type="password"
                id="password"
                className="inputt-area"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              </div>
              
            </div>
            <div className="field">
              <label className="label" htmlFor="cpassword">
                Confirm Password
              </label>
              <div className="inputt">
                  <LockIcon/>
                  <input
                    type="password"
                    id="cpassword"
                    className="inputt-area"
                    placeholder="Confirm your password"
                    name="cpassword"
                    value={user.cpassword}
                    onChange={handleChange}
              />
              </div>
              
            </div>


            <div  style={{  textAlign:"center" , display:'flex' , flexDirection:'column' }}>
            <div className="field" >
              <button
                style={{ cursor: "pointer" , textAlign:"center" }}
                value="register"
                onClick={PostData}
                className="form-button mr-20"
              >
                Register
              </button>
            </div>

            <div>
            <NavLink to="/login">
            <button
                style={{ cursor: "pointer" , textAlign:"center" }}
                className="form-button"
              >
               Log In
              </button>
              </NavLink>
            </div>
            </div>

          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
