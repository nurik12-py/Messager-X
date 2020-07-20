import React from "react";
import "./Profile.css";
import NavBar from "../componets/navBar";
import { ReactComponent as GlobeIcon } from "../icons/globe.svg";
import { ReactComponent as MailIcon } from "../icons/mail.svg";
import { ReactComponent as Gear } from "../icons/gear.svg";
import { ReactComponent as OutIcon } from "../icons/out.svg";
import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import { getUser } from "../services/fakeMainService";

function Profile() {
  const user = getUser("appsammic1@gmail.com");
  return (
    <div>
      <div className="animate">
        <div className="view-margin">
          <h2>Profile</h2>
          <div className="profile-card">
            <div className="d-flex">
              <img className="profile-card-photo" src={user.photoUrl} />
            </div>
            <h4 className="profile-card-fullname">Nursutan Musiraliev</h4>
            <div className="profile-card-description">
              Java, Python, JS, CSS
            </div>
          </div>
          <div className="base-card-container">
            <div className="base-card d-flex">
              <div>
                <div className="base-card-title">Country</div>
                <div>{user && user.country}</div>
              </div>
              <div>
                <GlobeIcon />
              </div>
            </div>
            <hr />
            <div className="base-card d-flex">
              <div>
                <div className="base-card-title">Email</div>
                <div>{user && user.email}</div>
              </div>
              <div>
                <MailIcon />
              </div>
            </div>
            <hr />
            <div className="base-card d-flex">
              <div>
                <div className="base-card-title">Phone</div>
                <div>{user && user.phone}</div>
              </div>
              <div>
                <PhoneIcon />
              </div>
            </div>
          </div>
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
      <div className="d-flex base-card empty-container">
        <div className="d-flex btn">
          <div>Settings</div>

          <Gear />
        </div>
        <div className="d-flex btn">
          <div>Logout</div>

          <OutIcon />
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Profile;
