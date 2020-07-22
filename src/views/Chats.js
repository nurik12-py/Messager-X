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

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      favorite: [],
      chats: [],
      filtered: [],
    };
  }
  handleChange = (e) => {
    const filtered = this.state.chats.filter((chat) => {
      if (
        chat.user2.startsWith(e.target.value) ||
        chat.user1.startsWith(e.target.value)
      )
        return chat;
    });
    console.log(this.state);
    this.setState({ filtered });
  };
  async componentDidMount() {
    try {
      const { data: chats } = await getChatsFor(localStorage.getItem("email"));

      const { data: favorite } = await getFavoriteFriends(
        localStorage.getItem("email")
      );
      const { data: user } = await getUser(localStorage.getItem("email"));
      console.log(user);
      this.setState({
        chats: chats["data"],
        favorite,
        user,
        filtered: chats["data"],
      });
    } catch (ex) {
      console.log(ex.response.status === 404 ? "Chats not found" : "");
    }
  }
  render() {
    const noChats = <h3 align="center">No chats yet</h3>;
    return (
      <div>
        <div className="animate">
          <div className="view-margin">
            <h2>Chats</h2>
            <SearchBox onChange={this.handleChange} />
            {this.state.favorite && (
              <FavoriteFriends favorite={this.state.favorite} />
            )}
            {this.state.chats.length === 0 ? noChats : null}
            {this.state.chats && (
              <div className="chat-cards">
                {this.state.filtered.map((chat) => (
                  <Link to={"/chat-room/" + chat.chat_id}>
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

        <NavBar />
      </div>
    );
  }
}

export default Chats;
