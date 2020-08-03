import React, { Component } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import NavBar from "../componets/navBar";
import { ReactComponent as GlobeIcon } from "../../node_modules/bootstrap-icons/icons/globe.svg";
import { ReactComponent as MailIcon } from "../../node_modules/bootstrap-icons/icons/mailbox.svg";
import { ReactComponent as Gear } from "../../node_modules/bootstrap-icons/icons/gear-wide-connected.svg";
import { ReactComponent as OutIcon } from "../../node_modules/bootstrap-icons/icons/box-arrow-right.svg";
import { ReactComponent as PhoneIcon } from "../../node_modules/bootstrap-icons/icons/telephone.svg";
import { getUser } from "../services/fakeMainService";
import { getCurrentEmail } from "../services/authService";
import ProfileCard from "../componets/profileCard";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  async componentDidMount() {
    const { data: user } = await getUser(getCurrentEmail());
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
                <ProfileCard
                  photoUrl={user.photoUrl}
                  title={user.name}
                  description={user.description && user.description}
                />
                <div className="base-card-container">
                  {user.country && (
                    <div className="base-card d-flex">
                      <div>
                        <div className="base-card-title">Country</div>
                        <div>{user.country}</div>
                      </div>
                      <div>
                        <GlobeIcon />
                      </div>
                    </div>
                  )}
                  <div className="base-card d-flex">
                    <div>
                      <div className="base-card-title">Email</div>
                      <div>{user.email}</div>
                    </div>
                    <div>
                      <MailIcon />
                    </div>
                  </div>
                  {user.phone && (
                    <div className="base-card d-flex">
                      <div>
                        <div className="base-card-title">Phone</div>
                        <div>{user.phone}</div>
                      </div>
                      <div>
                        <PhoneIcon />
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            )}
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

            <div className="d-flex btn">
              <Link to="/logout">
                <div>Logout</div>
              </Link>
              <Link to="/logout">
                <OutIcon />
              </Link>
            </div>
          </div>
        )}
        <NavBar />
      </div>
    );
  }
}

export default Profile;
