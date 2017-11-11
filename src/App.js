import React, { Component } from 'react';
import './App.css';
import AddUserForm from './AddUserForm';

class App extends Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
    this.state = {
      users: {},
    };
  }

  addUser(user) {
    // copy our state
    const users = { ...this.state.users };
    // add in our new user
    users[user.name] = user;
    // set new state
    this.setState({ users });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shared Music Taste</h1>
        </header>
        <p className="App-intro">
          To get started, enter some <code>Last.fm usernames</code> and submit.
        </p>
        <AddUserForm addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
