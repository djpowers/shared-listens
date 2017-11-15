import React from 'react';
import PropTypes from 'prop-types';

class TrackList extends React.Component {
  render() {
    const { index, recentTracks } = this.props;
    if (!recentTracks) return null;
    const tracksList = recentTracks.recenttracks.track.map(track => <li>{track.name}</li>);
    return (
      <div>
        <h2 className="user-name">{index}</h2>
        <ul className="track-lists">{tracksList}</ul>
      </div>
    );
  }
}

export default TrackList;

TrackList.propTypes = {
  index: PropTypes.string.isRequired,
  recentTracks: PropTypes.shape({
    recenttracks: PropTypes.shape({
      track: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};
