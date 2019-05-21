import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Track(artist, songTitle) {
  return <Link to={`/tracks/${artist}/${songTitle}`}>{songTitle}</Link>;
}

Track.propTypes = {
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired
};
