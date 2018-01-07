import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddUserForm from './AddUserForm';
import User from './User';

class UsersList extends React.Component {
  render() {
    const usersCount = Object.keys(this.props.users).length;
    let ctaMessage = null;
    if (usersCount === 0) {
      ctaMessage = 'To get started, add some <code>Last.fm usernames</code>!';
    } else if (usersCount === 1) {
      ctaMessage = 'Add at least one more <code>Last.fm username</code> to compare.';
    } else {
      ctaMessage = 'Continue adding users, or';
    }

    return (
      <div>
        <p dangerouslySetInnerHTML={{ __html: ctaMessage }} className="App-intro" />
        {usersCount > 1 &&
          <Link to="/shared_music">view your shared listens</Link>
        }
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
