import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    const { index, details } = this.props;
    const removeButton = <button onClick={() => this.props.removeUser(index)}>&times;</button>;

    return (
      <li className="users-list">
        <img src={details.image[1]['#text']} alt={details.name} />
        <p className="user-name">{details.name}</p>
        {removeButton}
      </li>
    );
  }
}

export default User;

User.propTypes = {
  index: PropTypes.string.isRequired,
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.array.isRequired,
  }).isRequired,
  removeUser: PropTypes.func.isRequired,
};
