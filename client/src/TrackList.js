import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TrackDetail from './TrackDetail';

class TrackList extends React.Component {
  render() {
    const { index, recentTracks } = this.props;
    if (!recentTracks) return null;
    const tracksList = recentTracks.recenttracks.track
      // filter out tracks with 'nowplaying' that do not have unique value to key off
      .filter(track => track['@attr'] == null)
      .map(track => <TrackDetail key={track.date.uts} track={track} />);
    return (
      <div>
        <h2 className="user-name">{index}</h2>
        <List className="track-lists">{tracksList}</List>
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
  }),
};

const List = styled.ul`
  list-style-type: none;
`;
