import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class TrackDetail extends React.Component {
  render() {
    const {
      image, album, name, artist,
    } = this.props.track;
    return (
      <TrackItem className="track-item">
        <figure>
          <Cover src={image[1]['#text']} alt={album['#text']} />
          <figcaption><em>{album['#text']}</em></figcaption>
        </figure>
        <span className="track-details"><strong>"{name}"</strong> <span>by</span> <strong>{artist['#text']}</strong> <span>from</span> <em>{album['#text']}</em></span>
      </TrackItem>
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

const TrackItem = styled.li`
  > span {
    margin-top: 15px;
    text-align: left;
  }
  > figure {
    margin: 8px 20px;
  }
  display: flex;
`;

const Cover = styled.img`
  &:hover{
    opacity: 0.8;
  }
`;
