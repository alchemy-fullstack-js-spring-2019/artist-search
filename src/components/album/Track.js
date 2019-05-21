import React from 'react';
import PropTypes from 'prop-types';

export default function Track({ artist, songTitle, lyricsLoad }) {
  console.log('before onClick', artist, songTitle);
  return <a href='javascript:void(0)' onClick={() => {
    console.log('in onClick', artist, songTitle);
    return lyricsLoad(artist, songTitle);
  }}>{songTitle}</a>;
}

Track.propTypes = {
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  lyricsLoad: PropTypes.func.isRequired
};
