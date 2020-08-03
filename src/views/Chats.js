import React from "react";
import "./Chats.css";
import { Link } from "react-router-dom";
import SearchBox from "../componets/common/searchBox";
import FavoriteFriends from "../componets/favoriteFriends";
import ChatCard from "../componets/chatCard";
import NavBar from "../componets/navBar";
import {
  getChatsFor,
  getFavoriteFriends,
  getUser,
} from "../services/fakeMainService";
import { getCurrentEmail } from "../services/authService";
import { makeOnline } from "../services/statusService";
class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: [],
      chats: [],
      filtered: [],
      email: getCurrentEmail(),
    };
  }
  handleChange = (e) => {
    const filtered = this.state.chats.filter((chat) => {
      if (
        chat.user2.startsWith(e.target.value) ||
        chat.user1.startsWith(e.target.value)
      )
        return chat;
      return false;
    });
    console.log(this.state);
    this.setState({ filtered });
  };
  async componentDidMount() {
    const { email } = this.state;
    const { data: user } = await getUser(email);
    const { data: favorite } = await getFavoriteFriends(email);
    const { data: chats } = await getChatsFor(email);
    makeOnline(email);
    this.setState({
      chats: chats["data"],
      favorite,
      user,
      filtered: chats["data"],
      hideNavbar: false,
    });
  }
  render() {
    const noChats = <h3 align="center">No chats yet</h3>;
    console.log(this.state.chats);
    return (
      <div>
        <div className="animate">
          <div className="view-margin">
            <h2>Chats</h2>
            <SearchBox
              onChange={this.handleChange}
              onFocus={() => {
                this.setState({ hideNavbar: true });
              }}
              onBlur={() => {
                this.setState({ hideNavbar: false });
              }}
            />
            {this.state.favorite && (
              <FavoriteFriends favorite={this.state.favorite} />
            )}
            {this.state.chats.length === 0 ? noChats : null}
            {this.state.chats && (
              <div className="chat-cards">
                {this.state.filtered.map((chat) => (
                  <Link key={chat.chat_id} to={"/chat-room/" + chat._id}>
                    <ChatCard
                      name={
                        this.state.user.email === chat.user1
                          ? chat.name2
                          : chat.name1
                      }
                      lastMessage={
                        chat.messages[chat.messages.length - 1]["message"]
                      }
                      lastMessageTime={
                        chat.messages[chat.messages.length - 1]["dateSent"]
                      }
                      photoUrl=""
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {!this.state.hideNavbar && <NavBar />}
      </div>
    );
  }
}

export default Chats;
