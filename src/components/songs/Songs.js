import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import { Link } from 'react-router-dom';

function Songs({ songsArray }) {
  const songsList = songsArray.map((song, i) => {
    console.log(song);
    const songId = `/songs/${song.id}`;
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
  songsArray: PropTypes.array.isRequired
};

export default Songs;
 
