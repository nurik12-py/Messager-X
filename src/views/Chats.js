import React from "react";
import "./Chats.css";
import { Link } from "react-router-dom";
import SearchBox from "../componets/common/searchBox";
import FavoriteFriends from "../componets/favoriteFriends";
import ChatCard from "../componets/chatCard";
import NavBar from "../componets/navBar";
import {
  getChat,
  getUser,
  getAllFriendsFor,
  getChatsFor,
} from "../services/fakeMainService";

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      chats: [],
    };
    console.log("chat", props);
  }
  handleChange = (e) => {
    console.log(e.target.value);
  };
  componentDidMount() {
    if (localStorage.getItem("email")) {
      const user = getUser(localStorage.getItem("email"));
      console.log("User get from localstore", user);
      this.setState({
        user,
        friends: getAllFriendsFor(user["email"]),
        chats: getChatsFor(user["email"]),
      });
    }
  }
  render() {
    const { friends, user } = this.state;
    return (
      <div>
        <div className="animate">
          <div className="view-margin">
            <h2>Chats</h2>
            <SearchBox onChange={this.handleChange} />
            <FavoriteFriends />
            <div className="chat-cards">
              {this.state.chats.map((chat) => (
                <Link to="chat-room">
                  <ChatCard
                    name={chat.user1 !== user.email ? chat.name1 : chat.name2}
                    lastMessage={
                      chat.messages[chat.messages.length - 1]["message"]
                    }
                    lastMessageTime="14:37"
                    photoUrl={
                      chat.user1 !== user.email ? chat.photo1 : chat.photo2
                    }
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Chats;
