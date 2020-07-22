import React, { Component } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import NavBar from "../componets/navBar";
import { ReactComponent as GlobeIcon } from "../icons/globe.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as Gear } from "../icons/gear.svg";
import { ReactComponent as OutIcon } from "../icons/out.svg";
import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import { getUser } from "../services/fakeMainService";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    window.location = "/";
  };
  async componentDidMount() {
    const { data: user } = await getUser(localStorage.getItem("email"));
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <div className="animate">
          <div className="view-margin">
            <h2>Profile</h2>
            {user && (
              <React.Fragment>
                <div className="profile-card">
                  <div className="d-flex">
                    <img
                      className="profile-card-photo"
                      src={user.photoUrl}
                      alt=""
                    />
                  </div>
                  <h4 className="profile-card-fullname">{user.name}</h4>
                  <div className="profile-card-description">
                    Java, Python, JS, CSS
                  </div>
                </div>
                <div className="base-card-container">
                  <div className="base-card d-flex">
                    <div>
                      <div className="base-card-title">Country</div>
                      <div>{user.country}</div>
                    </div>
                    <div>
                      <GlobeIcon />
                    </div>
                  </div>
                  <hr />
                  <div className="base-card d-flex">
                    <div>
                      <div className="base-card-title">Email</div>
                      <div>{user.email}</div>
                    </div>
                    <div>
                      <MailIcon />
                    </div>
                  </div>
                  <hr />
                  <div className="base-card d-flex">
                    <div>
                      <div className="base-card-title">Phone</div>
                      <div>{user.phone}</div>
                    </div>
                    <div>
                      <PhoneIcon />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
            {/* <div className="base-card-container">
            <div className="d-flex base-card">
              <div>Twitter</div>
              <div>Icon</div>
            </div>
            <hr />
            <div className="d-flex base-card">
              <div>Facebook</div>
              <div>Icon</div>
            </div>
            <hr />
            <div className="d-flex base-card">
              <div>GitHub</div>
              <div>Icon</div>
            </div>
          </div>*/}
          </div>
        </div>
        {user && (
          <div className="d-flex base-card empty-container">
            <div className="d-flex btn">
              <Link to="/settings">
                <div>Settings</div>
              </Link>
              <Gear />
            </div>

            <div className="d-flex btn" onClick={this.handleLogout}>
              <div>Logout</div>
              <OutIcon />
            </div>
          </div>
        )}
        <NavBar />
      </div>
    );
  }
}

export default Profile;
