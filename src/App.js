import React, { Component } from 'react';
import './App.css';
import AddUserForm from './AddUserForm';
import User from './User';

class App extends Component {
  constructor() {
    super();

    this.addUser = this.addUser.bind(this);
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
        <ul className="list-of-users">
          {
            Object
              .keys(this.state.users)
              .map(key => <User key={key} details={this.state.users[key]} />)
          }
        </ul>
      </div>
    );
  }
}

export default App;
