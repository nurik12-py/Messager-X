import React, { Component } from "react";
import "./ChatRoom.css";
import { ReactComponent as More } from "../../node_modules/bootstrap-icons/icons/three-dots-vertical.svg";
import { ReactComponent as Left } from "../../node_modules/bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as Send } from "../../node_modules/bootstrap-icons/icons/arrow-right-square-fill.svg";
import { ReactComponent as Info } from "../../node_modules/bootstrap-icons/icons/info-circle.svg";
import { ReactComponent as Trash } from "../../node_modules/bootstrap-icons/icons/trash.svg";

import {
  getChat,
  sendMessage,
  getUser,
  deleteChat,
} from "../services/fakeMainService";
import { getCurrentEmail } from "../services/authService";
import Navigation from "../componets/common/navigation";
import DropdownElement from "../componets/common/dropdownElement";
class ChatRoom extends Component {
  constructor(props) {
    super(props);
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
    this.timerID = setInterval(() => this.tick(), 1000);
    try {
      const { data } = await getChat(this.props.match.params.id);
      const { data: user } = await getUser(getCurrentEmail());
      const chat = data["data"];
      this.setState({ chat, user });
      this.scrollToBottom();
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        window.location = "/logout";
      }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  async tick() {
    const { data } = await getChat(this.props.match.params.id);
    const chat = data["data"];
    this.setState({ chat });
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSend = async () => {
    const { chat, user, value } = this.state;
    const original_chat = { ...chat };
    // TODO add formating to time
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
      await sendMessage(this.props.match.params.id, message);
    } catch (ex) {
      this.setState({ chat: original_chat });
    }
  };
  render() {
    const { chat, user } = this.state;
    return (
      <div className="animate">
        <div className="top-nav-fixed d-flex">
          {user && chat && (
            <Navigation
              leftIcon={<Left />}
              rightIcon={<More />}
              title={user.email === chat.user1 ? chat.name2 : chat.name1}
              leftLink={"/"}
              subtitle={"Online"}
              dropdownContent={
                <React.Fragment>
                  <DropdownElement
                    title={"Info"}
                    icon={<Info />}
                    link={
                      "/view-profile/" +
                      (user.email === chat.user1 ? chat.user2 : chat.user1)
                    }
                  />
                  <DropdownElement
                    title={"Delete chat"}
                    onClick={() => {
                      deleteChat(chat._id);
                      window.location = "/chats";
                    }}
                    icon={<Trash />}
                  />
                </React.Fragment>
              }
            />
          )}
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
