import React from "react";
import "./Login.css";
import { ReactComponent as ArrowIcon } from "../icons/arrow-right.svg";
import { login } from "../services/fakeMainService";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: "",
    };
  }
  async onClick() {
    // var provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithPopup(provider).then(
    //     (e) => {
    //         console.log(e.user);
    //     }
    // )
    console.log("Sending email", this.state.value);
    const response = await login(this.state.value);
    const email = response["data"]["email"];
    const token = response["data"]["token"];
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    window.location = "/chats";
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="animate login-page">
        <div className="center-login-page">
          <h2 className="login-text">Sign up</h2>
          <input onChange={this.handleChange} />
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
