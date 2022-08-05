import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

//importing the custom components
import Loader from "../components/assets/Loader";
import { useState } from "react";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(true);
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
  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const loginCredentials = {
        emailUser: email,
        password: password,
      };
      //calling the login funciton
      const login = await axios.post(
        `https://marketplaceprodigal.herokuapp.com/api/v1/auth/login`,
        loginCredentials
      );
      if (!login) {
        alert("Invalid email or password");
        // setLoader(false);
      } else {
        console.log(login);
        if (login.data.status === true) {
          console.log(login.data.token);
          localStorage.setItem("token", login.data.token);
          // setLoader(false);
          history.push("/markets");
        } else {
          console.log(login.response.data.status);
          // setLoader(false);
          alert("Invalid email or password");
        }
      }
    } catch (error) {
      // setLoader(false);
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
              <div className={`${loader ? "d-none" : "d-block"}`}>Sign In</div>
                <Loader loading={loader} />
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
