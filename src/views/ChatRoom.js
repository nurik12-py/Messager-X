import React, { Component } from "react";
import "./ChatRoom.css";
import { ReactComponent as More } from "../icons/more.svg";
import { ReactComponent as Left } from "../icons/left-arrow.svg";
import { ReactComponent as Send } from "../icons/arrow-right.svg";
import { Link } from "react-router-dom";
import { getChat } from "../services/fakeMainService";
class ChatRoom extends Component {
  render() {
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
              <div className="top-nav-info-name">N/A </div>
              <div className="top-nav-info-status">online</div>
            </div>
            <div className="top-nav-more-icon">
              <More />{" "}
            </div>
          </div>
        </div>
        {getChat("uid_nurik_victor")["messages"].map((message) => (
          <div
            className={
              "appsammic1@gmail.com" === message.owner
                ? "d-flex message-right"
                : "d-flex message-left"
            }
          >
            <div className="message ">
              <div className="message-content">{message.message}</div>
              <div className="message-date">{message.dateSent}</div>
            </div>
          </div>
        ))}
        <div className="d-flex bottom-container">
          <input className="chat-input" placeholder="Type your message" />
          <div className="send-icon">
            <Send />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
