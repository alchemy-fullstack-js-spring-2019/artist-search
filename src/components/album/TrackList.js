import React from 'react';
import PropTypes from 'prop-types';
import Track from './Track';

function TrackList({ artist, tracks, lyricsLoad }) {
  const trackList = tracks.map(track => {
    return (
      <li key={track.id} >
        <Track artist={artist} songTitle={track.title} lyricsLoad={lyricsLoad} />
      </li>
    );
  });

  return (
    <ol>
      {trackList}
    </ol>
  );
}

TrackList.propTypes = {
  artist: PropTypes.string.isRequired,
  tracks: PropTypes.array.isRequired,
  lyricsLoad: PropTypes.func.isRequired
};

export default TrackList;
