import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    const { details } = this.props;
    return (
      <li className="users-list">
        <img src={details.image[1]['#text']} alt={details.name} />
        <p className="user-name">{details.name}</p>
      </li>
    );
  }
}

export default User;

User.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.array.isRequired,
  }).isRequired,
};
