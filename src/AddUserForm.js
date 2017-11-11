import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = '';

class AddUserForm extends Component {
  async fetchUser(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${this.user.value}&api_key=${API_KEY}&format=json`);
      const data = await response.json();
      if (data.user) {
        this.props.addUser(data.user);
      } else {
        console.log(data.message);
      }
    } catch (e) {
      console.log(e);
    }
    this.userForm.reset();
  }

  render() {
    return (
      <form ref={input => this.userForm = input} className="add-users" onSubmit={e => this.fetchUser(e)}>
        <h2>Please Enter A User</h2>
        <input type="text" ref={input => this.user = input} required placeholder="Username" />
        <button type="submit">Add User</button>
      </form>
    );
  }
}

export default AddUserForm;

AddUserForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};
