import React from "react";
import "./chatCard.css";
import Avatar from "./common/avatar";
const ChatCard = ({
  name,
  lastMessageTime,
  lastMessage,
  hasUnreadMessages,
  photoUrl,
}) => {
  return (
    <div className="chat-card">
      <Avatar src={photoUrl} />
      <div className="chat-card-body">
        <div className="chat-card-body-name">{name}</div>

        <div className="chat-card-body-message text-truncate">
          {lastMessage}
        </div>
      </div>

      <div className="chat-card-body-time">{lastMessageTime}</div>

      {hasUnreadMessages && <div className="chat-card-indicator"></div>}
    </div>
  );
};

export default ChatCard;
