import React from "react";
import "./Login.css";
import { ReactComponent as ArrowIcon } from "../icons/arrow-right.svg";
import { getUser } from "../services/fakeMainService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // var provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider).then(
    //     (e) => {
    //         console.log(e.user);
    //     }
    // )
    localStorage.setItem("email", "appsammic1@gmail.com");
    window.location = "/";
  }
  render() {
    return (
      <div className="animate login-page">
        <div className="center-login-page">
          <h2 className="login-text">Sign up</h2>
          <div>
            <div class="d-flex">
              <div class="phone-number-icon" onClick={this.onClick}>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
