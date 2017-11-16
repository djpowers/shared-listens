import React from 'react';
import PropTypes from 'prop-types';

class TrackDetail extends React.Component {
  render() {
    const {
      image, album, name, artist,
    } = this.props.track;
    return (
      <ul className="list-of-tracks">
        <li className="track-item">
          <figure>
            <img src={image[1]['#text']} alt={album['#text']} />
            <figcaption><em>{album['#text']}</em></figcaption>
          </figure>
          <span className="track-details"><strong>"{name}"</strong> <span>by</span> <strong>{artist['#text']}</strong></span>
        </li>
      </ul>
    );
  }
}

export default TrackDetail;

TrackDetail.propTypes = {
  track: PropTypes.shape({
    image: PropTypes.array.isRequierd,
    album: PropTypes.shape({
      '#text': PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.shape({
      '#text': PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
