import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //handlinng the email
  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  //handling the password
  const functionHandlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  //handling the submit button
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      
    } catch (error) {
      console.log(error);
    }    
  };

  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form>
            <span>Sign In</span>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={handleEmail}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={functionHandlePassword}
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-right">
              <Link to="/reset">Forgot Password?</Link>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="form-checkbox"
              />
              <label className="custom-control-label" htmlFor="form-checkbox">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
          <h2>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
