import React, { Component } from "react";
import "./ChatRoom.css";
import { ReactComponent as More } from "../icons/more.svg";
import { ReactComponent as Left } from "../icons/left-arrow.svg";
import { ReactComponent as Send } from "../icons/arrow-right.svg";
import { Link } from "react-router-dom";
import { getChat, sendMessage, getUser } from "../services/fakeMainService";
class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      chat: null,
      value: "",
      messagesEndRef: React.createRef(),
    };
  }

  scrollToBottom = () => {
    this.state.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  async componentDidMount() {
    const { data } = await getChat(this.props.id);
    const { data: user } = await getUser(localStorage.getItem("email"));
    const chat = data["data"];
    this.setState({ chat, user });
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  };
  handleSend = async () => {
    const { chat, user, value } = this.state;
    const original_chat = { ...chat };
    const dataSent = `${new Date().getHours()}:${new Date().getMinutes()}`;
    const message = {
      message: value,
      owner: user.email,
      dateSent: dataSent,
    };
    const copy_chat = { ...chat };
    copy_chat["messages"].push(message);
    this.setState({ value: "", chat: copy_chat });
    try {
      await sendMessage(this.props.id, message);
    } catch (ex) {
      this.setState({ chat: original_chat });
    }
  };
  render() {
    const { chat, user } = this.state;
    return (
      <div className="animate">
        <div className="top-nav-fixed d-flex">
          <div className="top-nav d-flex">
            <Link to="/chats">
              <div className="top-nav-back-icon">
                {" "}
                <Left />{" "}
              </div>
            </Link>
            <div className="top-nav-info">
              {chat && (
                <div className="top-nav-info-name">
                  {user.email === chat.user1 ? chat.name2 : chat.name1}
                </div>
              )}
              <div className="top-nav-info-status">online</div>
            </div>
            <div className="top-nav-more-icon">
              <More />{" "}
            </div>
          </div>
        </div>
        {chat && (
          <div>
            {chat["messages"].map((message, index) => (
              <div
                key={index}
                className={
                  message.owner !== user.email
                    ? "d-flex message-left"
                    : "d-flex message-right"
                }
              >
                <div className="message">
                  <div className="message-content">{message.message}</div>
                  <div className="message-date">{message.dateSent}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div ref={this.state.messagesEndRef}></div>

        <div className="d-flex bottom-container">
          <input
            value={this.state.value}
            onChange={this.handleChange}
            className="chat-input"
            placeholder="Type your message"
          />
          <div className="send-icon" onClick={this.handleSend}>
            <Send />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
