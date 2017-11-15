import React from 'react';

import TrackList from './TrackList';

const API_KEY = '';

class SharedMusic extends React.Component {
  constructor() {
    super();
    this.state = {
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
        .then(() => this.setState({
          recentTracks,
        }))
      ));
  }

  render() {
    return (
      <div>
        {
          Object
            .keys(this.props.users)
            .map(key => <TrackList key={key} index={key} recentTracks={this.state.recentTracks[key]} />)
        }
      </div>
    );
  }
}

export default SharedMusic;
