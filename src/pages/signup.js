import React, { useState, useRef  } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
// import {useState} from "react";

export default function Signup() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    name: "",
    emailUser: "",
    password: "",
    confirmPassword: "",
  });
  //handling the input field
  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(e.target.name);
    const value = e.target.value;
    const name = e.target.name;
    setLoginData({ ...loginData, [name]: value });
  };
  //checking the password and confirm password matches or not
  const checkPassword = () => {
    if (loginData.password === loginData.confirmPassword) {
      return true;
    }
    return false;
  };
  const [checked, setChecked] = useState(false);
  //submit handler
  const submitHandler = async (e) => {
    e.preventDefault();
    if(checked == false){
      alert("Please Agree to terms and conditions");
    }
    else if (checkPassword()) {
      //perform the api call
      try {
        const postSignup = await axios.post(
          "https://marketplaceprodigal.herokuapp.com/api/v1/auth/signup",
          loginData
        );
        if (!postSignup) {
          alert("Email already exists");
        } else {
          console.log(postSignup);
          if (postSignup.data.status === true) {
            localStorage.setItem("token", postSignup.data.token);
            history.push("/markets");
          } else {
            console.log(postSignup.response.data.status);
            alert("Email already exists");
          }
        }
      } catch (error) {
        alert(error.message);
        console.log(error.message);
      }
    } 
    else {
      alert("Password and confirm password does not match");
    }
  };
  
  //checking the agreement
  const checkAgreement = (e) =>
  {
    console.log(checkboxRef.current.checked);
    setChecked(checkboxRef.current.checked);
  }
  const checkboxRef = useRef();
  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Create Account</span>
            <div className="form-group">
              <input
                type="text"
                value={loginData.name}
                name="name"
                onChange={handleInput}
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={loginData.emailUser}
                name="emailUser"
                onChange={handleInput}
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={loginData.password}
                onChange={handleInput}
                name="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={loginData.confirmPassword}
                onChange={handleInput}
                name="confirmPassword"
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                name="checked"
                className="custom-control-input"
                onChange={checkAgreement}
                ref={checkboxRef}
                value={checked}
                id="form-checkbox"
                required
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                I agree to the{" "}
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </label>
            </div>
            <button
              type="submit"
              onClick={submitHandler}
              className="btn btn-primary"
            >
              Create Account
            </button>
          </form>
          <h2>
            Already have an account?
            <Link to="/"> Sign in here</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
