import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';
import UsersList from './UsersList';
import SharedMusic from './SharedMusic';

class App extends Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.state = {
      users: {},
    };
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem('sharedListensFriends');

    if (localStorageRef) {
      this.setState({
        users: JSON.parse(localStorageRef),
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('sharedListensFriends', JSON.stringify(nextState.users));
  }

  addUser(user) {
    // copy our state
    const users = { ...this.state.users };
    // add in our new user
    users[user.name] = user;
    // set new state
    this.setState({ users });
  }

  removeUser(user) {
    const users = { ...this.state.users };
    delete users[user];
    this.setState({ users });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <h1 className="App-title">Shared Listens</h1>
            </Link>
          </header>
          <Switch>
            <Route exact path="/" render={() => <UsersList users={this.state.users} addUser={this.addUser} removeUser={this.removeUser} />} />
            <Route path="/shared_music" render={() => <SharedMusic users={this.state.users} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
