import React from "react";
import "./Friends.css";
import { ReactComponent as People } from "../icons/people.svg";
import { ReactComponent as More } from "../icons/more.svg";
import SearchBox from "../componets/common/searchBox";
import NavBar from "../componets/navBar";

function Friends() {
  return (
    <div>
      <div className="friends animate">
        <h2>Friends</h2>
        <SearchBox />
        <button className="d-flex invite-btn general-padding general-margin">
          <div className="invite ">Invite friends</div>
          <div className="ml-auto">
            <People />
          </div>
        </button>
        <div>
          <div className="letter general-margin">A</div>
          <div className="friend-card general-margin general-padding d-flex">
            <div className="d-flex align-items-c">
              <img className="friend-card-img" alt="" />
              <div className="friend-card-info">
                <div className="friend-card-name">Nursultan</div>
                <div className="friend-card-status">online</div>
              </div>
            </div>
            <div className="friend-card-more ml-auto">
              <More />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Friends;
