import React from "react";
import "./Login.css";
import { ReactComponent as GoogleLogo } from "../assets/logo-google.svg";
import auth from "../services/authService";
import PrimaryLogo from "../assets/primaryLogo";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: "",
    };
  }
  async onClick() {
    await auth.login("victor@gmail.com");
    window.location = "/";
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div className="login-page view-margin">
        <div className="logo-wrapper">
          <PrimaryLogo />
        </div>
        <h2 style={{ color: "#0066ff" }}>Chat with Love</h2>
        {/* <input id="email" onChange={this.handleChange} /> */}

        <div className="d-flex" onClick={this.onClick}>
          <button className="login-btn">
            Login with {<GoogleLogo className="google-logo" />}
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
