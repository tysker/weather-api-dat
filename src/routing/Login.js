import React, { Component } from "react";
//Styling
import "../css/index.css";
import "../css/grid.css";
import "../css/normalize.css";
//Components
import Footer from "../components/Footer";

function UserName() {
  return (
    <label htmlFor="user-name">
      <div className="login first">
        <p>Username</p>
        <input type="text" name="user-name" className="input-text" />
      </div>
    </label>
  );
}

function Password() {
  return (
    <label htmlFor="password">
      <div className="login">
        <p>Password</p>
        <input type="text" name="password" className="input-text-login" />
      </div>
    </label>
  );
}

class Login extends Component {
  render() {
    return (
      <div>
        <section className="section-sign-in">
          <div className="row">
            <div>
              <h2>Sign In</h2>
              <form id="login">
                <div>
                  <UserName />
                  <Password />
                  <input type="submit" value="Login" className=" btn login" />
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Login;
