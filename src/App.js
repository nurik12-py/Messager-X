import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Chats from "./views/Chats";
import Settings from "./views/Settings";
import CreateGroup from "./views/CreateGroup";
import Friends from "./views/Friends";
import Profile from "./views/Profile";
import ChatRoom from "./views/ChatRoom";
import Login from "./views/Login";
import ProtectedRoute from "./componets/common/protectedRoute";
import Logout from "./views/logout";
import ViewProfile from "./views/VIewProfile";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/chats" component={Chats} />
          <ProtectedRoute exact path="/chat-room/:id" component={ChatRoom} />
          <ProtectedRoute
            exact
            path="/view-profile/:id"
            component={ViewProfile}
          />
          <ProtectedRoute exact path="/create-group" component={CreateGroup} />
          <ProtectedRoute exact path="/friends" component={Friends} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/settings" component={Settings} />
          <Route exact path="/logout" component={Logout} />
          <Redirect from="/" exact to="/chats" />
        </Switch>
      </div>
    );
  }
}

export default App;
