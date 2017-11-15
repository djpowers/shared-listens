import React from 'react';
import PropTypes from 'prop-types';
import TrackList from './TrackList';

const API_KEY = '';

class SharedMusic extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      recentTracks: {},
    };
  }

  componentDidMount() {
    const recentTracks = {};
    Object
      .keys(this.props.users)
      .map((key => fetch(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${key}&api_key=${API_KEY}&format=json`)
        .then(res => res.json())
        .then(data => recentTracks[key] = data)
        .catch(error =>
          this.setState({
            isLoaded: true,
            error,
          }),
        )
        .then(() => this.setState({
          isLoaded: true,
          recentTracks,
        }))
      ));
  }

  render() {
    const { error, isLoaded, recentTracks } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        {
          Object
            .keys(this.props.users)
            .map(key => <TrackList key={key} index={key} recentTracks={recentTracks[key]} />)
        }
      </div>
    );
  }
}

export default SharedMusic;

SharedMusic.propTypes = {
  users: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
