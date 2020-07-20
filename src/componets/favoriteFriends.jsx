import React from "react";
import Avatar from "./common/avatar";
import "./favoriteFriends.css";
import _ from "lodash";

const FavoriteFriends = () => {
  return (
    <div className="avatars">
      {_.range(1, 11).map((n) => (
        <Avatar name={n} src={""} key={n} isOnline={true} />
      ))}
    </div>
  );
};

export default FavoriteFriends;
