import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import { Link } from 'react-router-dom';

function Songs({ songsArray, match }) {
  const songsList = songsArray.map((song, i) => {
    const songName = song.title;
    const songId = `/${match.params.artistName}/${match.params.artistId}/${match.params.albumId}/${songName}/${song.id}`;
    return (
      <li key={i}>
        <Link to={songId}><Song song={song.title} /></Link>
      </li>
    );
  });
  
  return (
    <ul>
      {songsList}
    </ul>
  );
}

Songs.propTypes = {
  songsArray: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default Songs;
 
