import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Chats from "./views/Chats";
import Settings from "./views/Settings";
import CreateGroup from "./views/CreateGroup";
import Friends from "./views/Friends";
import Profile from "./views/Profile";
import ChatRoom from "./views/ChatRoom";
import Login from "./views/Login";
import {
  getUser,
  getAllFriendsFor,
  getChatsFor,
} from "./services/fakeMainService";

class App extends React.Component {
  state = {
    user: null,
    friends: [],
    chats: [],
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
    const { user, friends, chats } = this.state;
    console.log(user, friends);
    return (
      <div className="App">
        <Switch>
          {user && <Route exact path="/" component={Chats} />}
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/chats"
            render={() => <Chats user={user} friends={friends} chats={chats} />}
          />
          <Route
            exact
            path="/chat-room"
            render={() => <ChatRoom user={user} />}
          />
          <Route exact path="/create-group" component={CreateGroup} />
          <Route exact path="/friends" render={() => <Friends />} />
          <Route exact path="/profile" render={() => <Profile user={user} />} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default App;
