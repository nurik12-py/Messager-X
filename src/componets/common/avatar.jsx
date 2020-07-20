import React from "react";
import "./avatar.css";
const Avatar = ({ src, name, isOnline }) => {
  return (
    <div className={isOnline ? "avatar online" : "avatar"}>
      <img className="avatar-img" alt="" src={src} />
      <div className="avatar-name">{name}</div>
    </div>
  );
};

export default Avatar;
