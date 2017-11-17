import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddUserForm from './AddUserForm';
import User from './User';

class UsersList extends React.Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, enter some <code>Last.fm usernames</code> and submit.
        </p>
        <AddUserForm addUser={this.props.addUser} />
        <UsersListGrid className="list-of-users">
          {
            Object
              .keys(this.props.users)
              .map(key => <User key={key} index={key} details={this.props.users[key]} removeUser={this.props.removeUser} />)
          }
        </UsersListGrid>
      </div>
    );
  }
}

export default UsersList;

UsersList.propTypes = {
  users: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
};

const UsersListGrid = styled.ul`
  display: grid;
  padding: 1rem;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  list-style-type: none;
`;
