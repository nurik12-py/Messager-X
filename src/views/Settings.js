import React from "react";
import "./Settings.css";
import NavBar from "../componets/navBar";
function Settings() {
  return (
    <div>
      <div className="animate">
        <div className="view-margin">
          <h2>Settings</h2>
          <div className="settings-card-container">
            <div className="settings-card d-flex">
              <div>
                <div className="settings-card-title">Account</div>
                <div>Update your profile details</div>
              </div>
              <div>Icon</div>
            </div>
          </div>
          <div className="settings-card-container">
            <div className="settings-card d-flex">
              <div>
                <div className="settings-card-title">Social</div>
                <div>Update your social info</div>
              </div>
              <div>Icon</div>
            </div>
          </div>
          <div className="settings-card-container">
            <div className="settings-card d-flex">
              <div>
                <div className="settings-card-title">Security</div>
                <div>Change your password</div>
              </div>
              <div>Icon</div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Settings;
