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
import { getUser } from "./services/fakeMainService";

class App extends React.Component {
  state = {
    user: null,
  };
  async componentDidMount() {
    if (localStorage.getItem("email")) {
      const { data: user } = await getUser(localStorage.getItem("email"));
      this.setState({ user });
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/chats" render={() => <Chats />} />
          <Route
            exact
            path="/chat-room/:id"
            render={({ match }) => <ChatRoom id={match.params.id} />}
          />
          <Route exact path="/create-group" component={CreateGroup} />
          <Route exact path="/friends" render={() => <Friends />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default App;
