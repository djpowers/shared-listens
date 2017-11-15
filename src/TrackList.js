import React from 'react';

class TrackList extends React.Component {
  render() {
    const { index, recentTracks } = this.props;
    return (
      <div>
        <h2 className="user-name">{index}</h2>
      </div>
    );
  }
}

export default TrackList;
