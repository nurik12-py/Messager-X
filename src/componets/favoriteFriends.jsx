import React from "react";
import Avatar from "./common/avatar";
import "./favoriteFriends.css";

const FavoriteFriends = ({ favorite }) => {
  console.log(favorite);
  return (
    <div className="avatars">
      {favorite.map((user) => (
        <Avatar
          name={user.name}
          src={user.photoUrl}
          key={user.email}
          isOnline={false}
        />
      ))}
    </div>
  );
};

export default FavoriteFriends;
