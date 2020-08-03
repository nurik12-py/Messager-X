import React, { Component } from "react";
import "./Friends.css";
import { ReactComponent as People } from "../../node_modules/bootstrap-icons/icons/share.svg";
import { ReactComponent as More } from "../../node_modules/bootstrap-icons/icons/three-dots-vertical.svg";
import { ReactComponent as PersonDash } from "../../node_modules/bootstrap-icons/icons/person-dash.svg";
import { ReactComponent as PersonCircle } from "../../node_modules/bootstrap-icons/icons/person-circle.svg";
import { ReactComponent as Pen } from "../../node_modules/bootstrap-icons/icons/pen.svg";
import { ReactComponent as PersonPlus } from "../../node_modules/bootstrap-icons/icons/person-plus.svg";

import SearchBox from "../componets/common/searchBox";
import NavBar from "../componets/navBar";
import {
  getAllFriendsFor,
  startChat,
  searchFriend,
  deleteFriend,
  addFriend,
} from "../services/fakeMainService";
import { getCurrentEmail } from "../services/authService";
import DropdownElement from "../componets/common/dropdownElement";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: {},
      filtered: {},
      found: {},
    };
  }
  async componentDidMount() {
    const { data } = await getAllFriendsFor(getCurrentEmail());
    this.setState({ friends: data["data"], filtered: data["data"] });
  }
  handleChange = (e) => {
    const { friends } = this.state;
    const filtered_keys = Object.keys(friends).filter((key) => {
      if (
        friends[key].email.startsWith(e.target.value) ||
        friends[key].name.toLowerCase().startsWith(e.target.value)
      )
        return friends[key];
      return false;
    });
    const filtered = {};
    filtered_keys.map((key) => {
      filtered[key] = friends[key];
      return null;
    });
    this.setState({ filtered });
    const valueForSearch = e.target.value;
    setTimeout(async () => {
      const { data } = await searchFriend(valueForSearch);
      this.setState({ found: data["data"] });
    }, 3000);
  };
  handleStartChat = async (user2) => {
    const result = await startChat(getCurrentEmail(), user2);
    window.location = "chat-room/" + result["data"]["id"];
  };
  handleAddFriend = async (key, friend) => {
    await addFriend(key);
    const copyFriends = { ...this.state.friends };
    copyFriends[key] = friend;
    this.setState({ friends: copyFriends, filtered: copyFriends });
  };
  handleDeleteFriend = async (id) => {
    await deleteFriend(getCurrentEmail(), id);
    const copyFriends = { ...this.state.friends };
    delete copyFriends[id];
    this.setState({ friends: copyFriends, filtered: copyFriends });
  };
  render() {
    const { filtered, found } = this.state;
    return (
      <div>
        <div className="friends animate">
          <h2>Friends</h2>
          <SearchBox onChange={this.handleChange} />
          <button className="d-flex invite-btn general-padding general-margin">
            <div className="invite ">Invite friends</div>
            <div className="ml-auto">
              <People />
            </div>
          </button>
          {Object.keys(found).length !== 0 && (
            <>
              <h3>Global search</h3>
              {Object.keys(found).map((key) => (
                <div
                  key={key}
                  className="friend-card general-margin general-padding d-flex"
                >
                  <div className="d-flex align-items-c">
                    <img
                      className="friend-card-img"
                      src={found[key].photoUrl}
                      alt=""
                    />
                    <div className="friend-card-info">
                      <div className="friend-card-name">{found[key].name}</div>
                      <div className="friend-card-status">
                        {found[key].email}
                      </div>
                    </div>
                  </div>
                  <div className="friend-card-more ml-auto">
                    <div className="dropdown">
                      {<More />}
                      <div className="dropdown-content">
                        <DropdownElement
                          title={"Start Chat"}
                          icon={<Pen />}
                          onClick={() => this.handleStartChat(key)}
                        />
                        <DropdownElement
                          title={"View Profile"}
                          icon={<PersonCircle />}
                          link={"view-profile/" + key}
                        />
                        <DropdownElement
                          title={"Add friend"}
                          icon={<PersonPlus />}
                          onClick={() => this.handleAddFriend(key, found[key])}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          <div>
            {}
            <h3>Your friends</h3>
            {Object.keys(filtered).map((key) => (
              <div
                key={key}
                className="friend-card general-margin general-padding d-flex"
              >
                <div className="d-flex align-items-c">
                  <img
                    className="friend-card-img"
                    src={filtered[key].photoUrl}
                    alt=""
                  />
                  <div className="friend-card-info">
                    <div className="friend-card-name">{filtered[key].name}</div>
                    <div className="friend-card-status">
                      {filtered[key].email}
                    </div>
                  </div>
                </div>
                <div className="friend-card-more ml-auto">
                  <div className="dropdown">
                    {<More />}
                    <div className="dropdown-content">
                      <DropdownElement
                        title={"Start Chat"}
                        icon={<Pen />}
                        onClick={() => this.handleStartChat(key)}
                      />
                      <DropdownElement
                        title={"View Profile"}
                        icon={<PersonCircle />}
                        link={"view-profile/" + key}
                      />
                      <DropdownElement
                        title={"Delete friend"}
                        icon={<PersonDash />}
                        onClick={() => this.handleDeleteFriend(key)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Friends;
