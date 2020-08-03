import React from "react";

import "./profileCard.css";

const ProfileCard = ({ photoUrl, title, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-photo-container">
        <img className="profile-card-photo" alt="" src={photoUrl} />
      </div>
      <h4 className="profile-card-title">{title}</h4>
      <div className="profile-card-description">{description}</div>
    </div>
  );
};

export default ProfileCard;
