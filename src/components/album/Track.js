import React from 'react';
import PropTypes from 'prop-types';

export default function Track({ artist, songTitle, lyricsLoad }) {
  return <a href='javascript:void(0)' onClick={() => {
    return lyricsLoad(artist, songTitle);
  }}>{songTitle}</a>;
}

Track.propTypes = {
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  lyricsLoad: PropTypes.func.isRequired
};
