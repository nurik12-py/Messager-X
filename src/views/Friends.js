import React, { Component } from "react";
import "./Friends.css";
import { ReactComponent as People } from "../icons/people.svg";
import { ReactComponent as More } from "../icons/more.svg";
import SearchBox from "../componets/common/searchBox";
import NavBar from "../componets/navBar";
import { getAllFriendsFor } from "../services/fakeMainService";

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: {},
      filtered: {},
    };
  }
  async componentDidMount() {
    const { data } = await getAllFriendsFor(localStorage.getItem("email"));
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
    });
    const filtered = {};
    filtered_keys.map((key) => {
      filtered[key] = friends[key];
    });
    this.setState({ filtered });
  };
  render() {
    const { filtered } = this.state;
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
          <div>
            <div className="letter general-margin">A</div>
            {Object.keys(filtered).map((key) => (
              <div className="friend-card general-margin general-padding d-flex">
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
                  <More />
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
